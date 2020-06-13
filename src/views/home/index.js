import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={{ ...styles.card, height: 190 }}>
          <Card.Title
            title="Ativar Controlador de Descanso"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Paragraph>
                Ative o controlador de descanso, ganhe segurança em suas viagens
                e aumente sua pontuação para ficar em destaque para as empresas
                contratantes.
              </Paragraph>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button color="white" style={styles.buttonCard}>
              Ativar
            </Button>
          </Card.Actions>
        </Card>

        <Card style={{ ...styles.card, height: 150 }}>
          <Card.Title
            title="Alerta de Perigo"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <Paragraph>
              Acione o alerta para uma central de monitoramento e aguarde o
              socorro.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button color="white" style={styles.buttonCard}>
              Acionar
            </Button>
          </Card.Actions>
        </Card>

        <Card style={{ ...styles.card, height: 150 }}>
          <Card.Title
            title="Saúde"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <Paragraph>
              Acompanhe seus exames feitos nos postos da CCR e receba seus
              exames via App.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button color="white" style={styles.buttonCard}>
              Ver
            </Button>
          </Card.Actions>
        </Card>

        <Card style={{ ...styles.card, height: 170 }}>
          <Card.Title
            title="Frete Ranking"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <Paragraph>
              Mostre que você é um profissional exemplar e destaque-se para as
              empresas encontrar o seu perfil.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button color="white" style={styles.buttonCard}>
              Acessar
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
}
