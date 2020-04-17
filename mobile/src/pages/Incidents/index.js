import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";

const Incidents = () => {
  const [incidents, setIncidents] = useState([1, 2]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const loadingM = "Loading...";

  function navigateToDetail() {
    //Detail is the route name
    navigation.navigate("Detail");
  }
  /**
   * @GET route incidents
   */
  async function loadIncidents() {
    try {
      const response = await api.get("incidents");
      const theData = response.data;
      console.log("-----////////////////////////-----");
      console.log(theData);
      setIncidents(theData);
      console.log(" ------------incidents array-------- ");
      console.log(incidents);
      console.log(" ------------incidents array end-------- ");
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>0 cases</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>
        Choose one of the cases below to save the day!
      </Text>

      {loading ? (
        <View style={styles.incident}>
          <Text style={styles.description}>{loadingM}</Text>
        </View>
      ) : (
        <View style={styles.incident}>
          <Text style={styles.description}>LOADED</Text>
        </View>

        // <FlatList
        //   data={incidents}
        //   style={styles.incidentList}
        //   keyExtractor={(incident) => String(incident.id)}
        //   showsVerticalScrollIndicator={false}
        //   renderItem={({ item: incident }) => (
        //     <View style={styles.incident}>
        //       <Text style={styles.incidentProperty}>NGO:</Text>
        //       <Text style={styles.incidentValue}>{incident.name}</Text>

        //       <Text style={styles.incidentProperty}>Case:</Text>
        //       <Text style={styles.incidentValue}>{incident.title}</Text>

        //       <Text style={styles.incidentProperty}>Value:</Text>
        //       <Text style={styles.incidentValue}>{incident.value}</Text>

        //       <TouchableOpacity
        //         style={styles.detailsButton}
        //         onPress={navigateToDetail}
        //       >
        //         <Text style={styles.detailsButtonText}>See more Details</Text>
        //         <Feather name={"arrow-right"} size={17} color={"#E02041"} />
        //       </TouchableOpacity>
        //     </View>
        //   )}
        // />
      )}
    </View>
  );
};

export default Incidents;
