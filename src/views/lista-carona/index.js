import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function ListaCarona({ route, navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.imagemCarona}
                    source={require('../../../imagens/listaCarona.png')}
                ></Image>
                <Text style={styles.listCaronas}>Lista de Caronas</Text>
                {route.params.viajens.map((viajem, index) => (
                    <Card key={index} style={styles.cardViajem}>
                        <Card.Content>
                            <View style={styles.containerInCard}>
                                <Image
                                    style={styles.imagemViajem}
                                    source={require(`../../../imagens/perfil/joao.jpg`)}
                                ></Image>
                                <View>
                                    <Text>{viajem.Nome}</Text>
                                    <Text style={styles.horaCard}>{viajem.Hora}</Text>
                                    <Button
                                        style={styles.buttonStyle}
                                        onPress={() => navigation.navigate('Perfil', { viajem })}
                                    >
                                        PERFIL
                                    </Button>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={styles.notaStar}
                                        source={require(`../../../imagens/perfil/star.png`)}
                                    ></Image>
                                    <Text>{viajem.Nota}</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                ))}
            </View>
        </ScrollView>
    );
}
