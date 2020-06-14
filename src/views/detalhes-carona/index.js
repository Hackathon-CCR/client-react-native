import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { styles } from './styles';
import PerfilImage from '../../../imagens/perfil/admin.jpg';

export default function DetalhesCarona({ route, navigation }) {
    const { viajem } = route.params;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card style={styles.cardViajem}>
                    <Card.Content>
                        <Card.Cover source={PerfilImage} style={styles.perfilImage} />

                        <View style={styles.containerInCard}>
                            <View>
                                <Text style={styles.textInfo}>
                                    {viajem.Nome} - {viajem.Nota}
                                </Text>
                                <Text style={styles.textInfo}>Empresa: Trans Herculano</Text>
                                <Text style={styles.textInfo}>Placa:HJX1717</Text>
                                <Text style={styles.textInfo}>
                                    Ponto de encontro: Posto São José
                                </Text>
                                <Text style={styles.textInfo}>Horário: {viajem.Hora}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.cardSecundario}>
                    <Card.Content>
                        <View style={styles.containerInCardSecundario}>
                            <View>
                                <Text style={styles.textInfoSecundario}>Parabéns!</Text>
                                <Text style={styles.textInfoSecundario}>Carona encontrada!</Text>
                                <Text style={styles.textInfoSecundario}>
                                    atente-se ao horário, ponto de encontro e dados do motorista!
                                </Text>
                            </View>
                        </View>
                    </Card.Content>
                    <View style={styles.footerCardSecundario}>
                        <Button
                            color="black"
                            onPress={() => navigation.navigate('Perfil', { viajem })}
                        >
                            VER PERFIL
                        </Button>
                        <Button color="black" onPress={() => navigation.navigate('ReservaCarona')}>
                            RESERVAR
                        </Button>
                    </View>
                </Card>
            </View>
        </ScrollView>
    );
}
