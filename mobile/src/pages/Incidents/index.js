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
      const theData = response.data.incidents;
      setIncidents(theData);
      console.log(theData);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  }

  const listEmptyComponent = () => {
    return (
      <View>
        <Text> loading... </Text>
      </View>
    );
  };

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
        <FlatList
          data={incidents}
          style={styles.incidentList}
          keyExtractor={(incident) => String(incident.id)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={listEmptyComponent}
          renderItem={({ item: incident }) => (
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>NGO:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentProperty}>Case:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>Value:</Text>
              <Text style={styles.incidentValue}>{incident.value}</Text>

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
      )}
    </View>
  );
};

export default Incidents;
// import React, { useState, useEffect } from "react";
// import { Feather } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";

// import api from "../../services/api";

// import logoImage from "../../assets/logo.png";
// import styles from "./styles";

// export default function Incidents() {
//   const [incidents, setIncidents] = useState([]);
//   const [totalIncidents, setTotalIncidents] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const navigation = useNavigation();

//   function navigateToDetails(incident) {
//     navigation.navigate("Details", { incident });
//   }

//   async function loadIncidents() {
//     if (loading) {
//       return;
//     }

//     if (totalIncidents > 0 && incidents.length === totalIncidents) {
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await api.get("/incidents", {
//         params: {
//           page: currentPage,
//         },
//       });

//       // setIncidents(response.data.incidents);
//       setIncidents([...incidents, ...response.data.incidents]);
//       setTotalIncidents(response.headers["X-Total-Count"]);

//       setCurrentPage(currentPage + 1);
//       setLoading(false);

//       // console.log(response.data);

//       // setIncidents([...incidents, ...response.data]);
//       // setTotalIncidents(response.headers["X-Total-Count"]);

//       // setCurrentPage(currentPage + 1);
//       // setLoading(false);
//     } catch (e) {}
//   }

//   useEffect(() => {
//     loadIncidents();
//   }, []);

//   const listEmptyComponent = () => {
//     return (
//       <View>
//         <Text> loading </Text>
//       </View>
//     );
//   };

//   const renderList = () => {
//     <FlatList
//       data={incidents}
//       style={styles.incidentsList}
//       keyExtractor={(incident) => String(incident.id)}
//       ListEmptyComponent={listEmptyComponent}
//       showsVerticalScrollIndicator={false}
//       onEndReached={loadIncidents}
//       onEndReachedThreshold={0.2}
//       renderItem={({ item: incident }) => (
//         <View style={styles.incident}>
//           <Text style={styles.incidentNGO}>
//             {incident.name} from {incident.city}/{incident.state}
//           </Text>
//           <Text style={styles.incidentDescription}>{incident.description}</Text>
//           <Text style={styles.incidentValue}>
//             {Intl.NumberFormat("en-CA", {
//               style: "currency",
//               currency: "CAD",
//             }).format(incident.value)}
//           </Text>
//           <TouchableOpacity
//             onPress={() => navigateToDetails(incident)}
//             style={styles.incidentButton}
//           >
//             <Text style={styles.incidentButtonText}>More details</Text>
//             <Feather name='arrow-right' size={16} color='#E02041' />
//           </TouchableOpacity>
//         </View>
//       )}
//     />;
//   };

//   return (
//     <View style={styles.incidentsContainer}>
//       {console.log(incidents)}
//       <View style={styles.headerContainer}>
//         <Image source={logoImage} />
//         <Text style={styles.headerText}>
//           Total of <Text style={styles.headerTextBold}>{totalIncidents}</Text>{" "}
//           incidents
//         </Text>
//       </View>
//       <Text style={styles.mainTitle}>Bem-vindo</Text>
//       <Text style={styles.mainDescription}>
//         Chose one of the cases below to save the day!
//       </Text>
//       {/* {incidents.length === 0 ? (
//         <Text style={styles.mainDescription}>
//           Chose one of the cases below to save the day!
//         </Text>
//       ) : (
//         renderList()
//       )} */}
//       {renderList()}
//     </View>
//   );
// }
