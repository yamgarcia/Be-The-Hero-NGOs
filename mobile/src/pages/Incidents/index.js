import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import logoImg from "../../assets/logo.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Incidents = () => {
  const navigation = useNavigation();

  function navigateToDetail() {
    //Detail is the route name
    navigation.navigate("Detail");
  }

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

      <FlatList
        style={styles.incidentList}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(incident) => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>Apade</Text>

            <Text style={styles.incidentProperty}>Case:</Text>
            <Text style={styles.incidentValue}>Ran over dog</Text>

            <Text style={styles.incidentProperty}>Value:</Text>
            <Text style={styles.incidentValue}>$150</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>See more Details</Text>
              <Feather name={"arrow-right"} size={17} color={"#E02041"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Incidents;
