import React from "react";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import * as MailComposer from "expo-mail-composer";

const Detail = () => {
  const navigation = useNavigation();
  // const message = `Hello APAD, I'd like to help on the case "Ran over dog" with cost $120,00.`;

  const navigateBack = () => {
    navigation.goBack();
  };

  // const sendMail = () => {
  //   MailComposer.composeAsync({
  //     subject: "Incident: Ran over dog",
  //     recipients: ["yamgarcia.ca@gmail.com"],
  //     body: message,
  //   });
  // };
  // const sendWhatsapp = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' size={28} color='#e82041' />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>Apade</Text>

        <Text style={styles.incidentProperty}>Case:</Text>
        <Text style={styles.incidentValue}>Ran over dog</Text>

        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={styles.incidentValue}>$150</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>

        <Text style={styles.heroDescription}>Get in touch:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={navigateBack}>
            <Text style={styles.actionText}>Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={navigateBack}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

// import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import GestureRecognizer, {
//   swipeDirections,
// } from "react-native-swipe-gestures";
// import Constants from "expo-constants";

// const SomeComponent = () => {
//   const [myText, setMyText] = useState("I'm ready to set swiped");
//   const [backgroundColor, setBackgroundColor] = useState("#fff");
//   const [gestureName, setGestureName] = useState("none");

//   const onSwipeUp = (gestureState) => {
//     setMyText("You swiped up!");
//   };

//   const onSwipeDown = (gestureState) => {
//     setMyText("You swiped down!");
//   };

//   const onSwipeLeft = (gestureState) => {
//     setMyText("You swiped left!");
//   };

//   const onSwipeRight = (gestureState) => {
//     setMyText("You swiped right!");
//   };

//   const onSwipe = (gestureName, gestureState) => {
//     const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
//     setGestureName(gestureName);
//     switch (gestureName) {
//       case SWIPE_UP:
//         setBackgroundColor("red");
//         break;
//       case SWIPE_DOWN:
//         setBackgroundColor("green");
//         break;
//       case SWIPE_LEFT:
//         setBackgroundColor("lightblue");
//         break;
//       case SWIPE_RIGHT:
//         setBackgroundColor("yellow");
//         break;
//     }
//   };

//   const config = {
//     velocityThreshold: 0.3,
//     directionalOffsetThreshold: 80,
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//       paddingTop: Constants.statusBarHeight + 20,
//       backgroundColor: backgroundColor,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <GestureRecognizer
//         onSwipe={(direction, state) => onSwipe(direction, state)}
//         onSwipeUp={(state) => onSwipeUp(state)}
//         onSwipeDown={(state) => onSwipeDown(state)}
//         onSwipeLeft={(state) => onSwipeLeft(state)}
//         onSwipeRight={(state) => onSwipeRight(state)}
//         config={config}
//         style={{ styles }}
//       >
//         <Text style={{ fontSize: 34 }}>{myText}</Text>
//         <Text>
//           onSwipe callback received gesture:{" "}
//           {gestureName ? gestureName : "Try solving this bug"}
//         </Text>
//       </GestureRecognizer>
//     </View>
//   );
// };

// export default SomeComponent;
