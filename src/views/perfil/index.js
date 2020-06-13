import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";
import PerfilImage from "../../../imagens/perfil/admin.png";

export default function Perfil(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={PerfilImage} style={styles.perfilImage}></Image>
      </View>
    </ScrollView>
  );
}
