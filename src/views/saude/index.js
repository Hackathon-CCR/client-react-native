import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";
import DoacaoSangue from "../../../imagens/icones/blood-donation.png";
import Oculos from "../../../imagens/icones/vision.png";
import Dente from "../../../imagens/icones/tooth.png";
import Helth from "../../../imagens/icones/health.png";
import Doctor from "../../../imagens/icones/doctor.png";
import TestTube from "../../../imagens/icones/test-tube.png";
import Vacina from "../../../imagens/icones/vaccine.png";

export default function Saude() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={{ ...styles.card, height: 250 }}>
          <Card.Title
            title="Tipagem Sanguínea + Fator Rh"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={TestTube} />
              <Paragraph style={{ marginTop: 10 }}>
                Fique sabendo qual o seu grupo sanguíneo, para quem você pode
                doar sangue e receber.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={{ ...styles.card, height: 230 }}>
          <Card.Title
            title="Testes de Glicemia, Colesterol e Triglicerídios"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={DoacaoSangue} />
              <Paragraph style={{ marginTop: 10 }}>
                Avalie seu estado de saúde com os exames rápidos e faça
                acompanhamento.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={{ ...styles.card, height: 220 }}>
          <Card.Title
            title="Pressão Arterial"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={Doctor} />
              <Paragraph style={{ marginTop: 10 }}>
                Acompanhe como está a sua pressão.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={{ ...styles.card, height: 250 }}>
          <Card.Title
            title="Acuidade Visual"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={Oculos} />
              <Paragraph style={{ marginTop: 10 }}>
                Identifique se sua visão espacial está boa o suficiente para que
                você enxergue o contorno e a forma dos objetos.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={{ ...styles.card, height: 250 }}>
          <Card.Title
            title="Atendimento Odontológico"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={Dente} />
              <Paragraph style={{ marginTop: 10 }}>
                Avalie a sua saúde bucal para prevenir problemas odontológicos
                que podem se desenvolver.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={{ ...styles.card, height: 240 }}>
          <Card.Title
            title="Vacinação"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={Vacina} />
              <Paragraph style={{ marginTop: 10 }}>
                Fique em dia com a sua vacina e se imunize de doenças.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={{ ...styles.card, height: 250 }}>
          <Card.Title
            title="Toxicológico"
            style={styles.titleCard}
            titleStyle={styles.textTitleCard}
          />
          <Card.Content>
            <View style={styles.contentCard}>
              <Image style={styles.imagem} source={Helth} />
              <Paragraph style={{ marginTop: 10 }}>
                Fique em dia com a sua vacina e se imunize de doenças.
              </Paragraph>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
