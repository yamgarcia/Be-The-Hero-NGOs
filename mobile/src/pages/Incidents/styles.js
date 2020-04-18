import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },

  incidentList: {
    marginTop: 21,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default styles;
// import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

// export default StyleSheet.create({
//   incidentsContainer: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: Constants.statusBarHeight + 20,
//   },

//   headerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   headerText: {
//     fontSize: 15,
//     color: "#737380",
//   },

//   headerTextBold: {
//     fontWeight: "bold",
//   },

//   mainTitle: {
//     fontSize: 30,
//     marginBottom: 16,
//     marginTop: 48,
//     color: "#13131a",
//     fontWeight: "bold",
//   },

//   mainDescription: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: "#737380",
//   },

//   incidentsList: {
//     marginTop: 32,
//   },

//   incident: {
//     padding: 24,
//     borderRadius: 5,
//     backgroundColor: "#FFF",
//     marginBottom: 16,
//   },

//   incidentNGO: {
//     fontSize: 16,
//     color: "#333",
//     fontWeight: "bold",
//   },

//   incidentDescription: {
//     fontSize: 14,
//     color: "#404040",
//     marginVertical: 10,
//   },

//   incidentValue: {
//     color: "#585858",
//     marginBottom: 30,
//   },

//   incidentButton: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   incidentButtonText: {
//     color: "#E02041",
//     fontWeight: "bold",
//     marginRight: 10,
//   },
// });
