import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { styles } from './styles';

export default function ReservaCarona({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card style={styles.cardViajem}>
                    <Card.Content>
                        <Image
                            source={require('../../../imagens/reserva.png')}
                            style={styles.perfilImage}
                        />
                    </Card.Content>
                </Card>
                <Card style={styles.cardSecundario}>
                    <Card.Content>
                        <View style={styles.containerInCardSecundario}>
                            <View>
                                <Text style={styles.textInfoSecundario}>Parabéns!</Text>
                                <Text style={styles.textInfoSecundario}>
                                    Carona solicitada! aguarde
                                </Text>
                                <Text style={styles.textInfoSecundario}>
                                    a confirmação do motorista
                                </Text>
                            </View>
                        </View>
                        {/* <View style={styles.containerInCardSecundario}>
                            <View>
                                <Text style={styles.textInfoSecundario}>Parabéns!</Text>
                                <Text style={styles.textInfoSecundario}>
                                    Sua carona foi confirmada!
                                </Text>
                                <Text style={styles.textInfoSecundario}>
                                    Use cinto de segurança.
                                </Text>
                                <Text style={styles.textInfoSecundario}>
                                    Atente-se aos horários!
                                </Text>
                                <Text style={styles.textInfoSecundario}>E boa viagem!</Text>
                            </View>
                        </View> */}
                    </Card.Content>
                    <View style={styles.footerCardSecundario}>
                        <Button color="black" onPress={() => navigation.navigate('ListaCarona')}>
                            OK
                        </Button>
                    </View>
                </Card>
            </View>
        </ScrollView>
    );
}
