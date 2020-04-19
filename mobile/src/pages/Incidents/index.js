import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";

import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function navigateToDetail(incid) {
    //Detail is the route name
    navigation.navigate("Detail", { incid });
  }
  /**
   * @GET route incidents
   */
  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (totalItems > 0 && incidents.length === totalItems) {
      return;
    }
    setLoading(true);

    try {
      const response = await api.get("incidents", {
        params: { page },
      });

      const theData = response.data.incidents;
      setIncidents([...incidents, ...theData]);
      setTotalItems(response.headers["x-total-count"]);
      setPage(page + 1);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  }

  const listEmptyComponent = () => {
    <View>
      <Text> Loading... </Text>
    </View>;
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{totalItems}</Text>
          <Text> cases</Text>
        </Text>
      </View>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>
        Choose one of the cases below to save the day!
      </Text>

      {incidents.length === 0 ? (
        <Text style={styles.mainDescription}>{listEmptyComponent()}</Text>
      ) : (
        <FlatList
          data={incidents}
          style={styles.incidentList}
          keyExtractor={(incident) => String(incident.id)}
          showsVerticalScrollIndicator={loading}
          ListEmptyComponent={listEmptyComponent}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incid }) => (
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>NGO:</Text>
              <Text style={styles.incidentValue}>{incid.name}</Text>

              <Text style={styles.incidentProperty}>Case:</Text>
              <Text style={styles.incidentValue}>{incid.title}</Text>

              <Text style={styles.incidentProperty}>Value:</Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat("en-CA", {
                  style: "currency",
                  currency: "CAD",
                }).format(incid.value)}
              </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {
                  navigateToDetail(incid);
                }}
              >
                <Text style={styles.detailsButtonText}>See more Details</Text>
                <Feather name={"arrow-right"} size={17} color={"#E02041"} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Incidents;
