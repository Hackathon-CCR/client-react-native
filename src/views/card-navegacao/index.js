import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles';
import PerfilImage from '../../../imagens/perfil/admin.jpg';
import StarImage from '../../../imagens/perfil/star.png';
import { logout } from '../../services/auth';
import { StackActions } from '@react-navigation/native';

export default function CardNavegacao({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Button
                    style={{ backgroundColor: '#f0284a' }}
                    onPress={async () => {
                        await logout();
                        navigation.dispatch(StackActions.replace('Login'));
                    }}
                >
                    <Text style={{ color: '#fff' }}>Logout</Text>
                </Button>

                <Card style={styles.cardNav} onPress={() => navigation.navigate('Perfil')}>
                    <Card.Content>
                        <Text style={styles.textCard}>Meu Perfil</Text>
                        <Image
                            style={styles.imageNav}
                            source={require('../../../imagens/perfil/admin.jpg')}
                        ></Image>
                    </Card.Content>
                </Card>

                <Card style={styles.cardNav} onPress={() => navigation.navigate('Home')}>
                    <Card.Content>
                        <Text style={styles.textCard}>Procurar carona</Text>
                        <Image
                            style={styles.imageNav}
                            source={require('../../../imagens/place.png')}
                        ></Image>
                    </Card.Content>
                </Card>

                <Card style={styles.cardNav} onPress={() => navigation.navigate('CadastroCarona')}>
                    <Card.Content>
                        <Text style={styles.textCard}>Oferecer Carona</Text>
                        <Image
                            style={styles.imageNav}
                            source={require('../../../imagens/listaCarona.png')}
                        ></Image>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
}
