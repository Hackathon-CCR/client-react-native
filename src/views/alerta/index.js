import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";
import security from "../../../imagens/icones/security.png";

export default function Alerta() {
  return (
    <ScrollView>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.text}>SOLICITAR</Text>
          <Text style={styles.text}>SOCORRO</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Card style={{ ...styles.card, height: 270 }}>
          <Card.Title
            title="Relatar atividade Suspeita"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Image style={styles.imagem} source={security}></Image>
          <Card.Content>
            <Paragraph style={{ marginTop: 10 }}>
              Insira uma informação de atividade suspeita e contribua para
              outros usuários ficarem a salvos!
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button color="white" style={styles.buttonCard}>
              RELATAR
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
}
