import React from "react";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const incid = route.params.incid;
  const message = `Hello ${incid.name}, I'd like to help on the case ${
    incid.title
  } with the contributions of ${Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(incid.value)}.`;

  const navigateBack = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Incident: ${incid.title}`,
      recipients: [`${incid.email}`],
      body: message,
    });
  };

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=17783232829&text=${message}`);
  };

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
        <Text style={styles.incidentValue}>
          {incid.name} of {incid.city}, {incid.state}
        </Text>

        <Text style={styles.incidentProperty}>Case:</Text>
        <Text style={styles.incidentValue}>{incid.title}</Text>

        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
          }).format(incid.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>

        <Text style={styles.heroDescription}>Get in touch:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;
