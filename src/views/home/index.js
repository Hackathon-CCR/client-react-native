import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import caronas from '../../helpers/caronas.json';
import { useNavigation } from '@react-navigation/native';
import { isAuthenticated, logout } from '../../services/auth';
import { StackActions } from '@react-navigation/native';

export default function Home() {
    const [origem, setOrigem] = useState('');
    const [listaViajens, setListaViajens] = useState(caronas);

    const navigation = useNavigation();

    useEffect(() => {
        let newCaronas = caronas.data;
        if (origem && origem !== null) {
            newCaronas = newCaronas.filter((item) => item.Origem.search(origem) !== -1);
        }
        setListaViajens(newCaronas);
    }, [origem]);

    useEffect(() => {
        function checkAuth() {
            isAuthenticated().then(async (x) => {
                if (!x) {
                    navigation.dispatch(StackActions.replace('Login'));
                }
            });
        }

        checkAuth();
    }, []);

    handleBuscar = () => {
        navigation.navigate('ListaCarona', { viajens: listaViajens });
    };

    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Button
                        onPress={async () => {
                            await logout();
                            navigation.dispatch(StackActions.replace('Login'));
                        }}
                    >
                        Logout
                    </Button>
                    <Image style={styles.tinyLogo} source={require('../../../imagens/place.png')} />
                    <Text style={styles.title}>Para onde você quer ir?</Text>

                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Origem"
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => setOrigem(text)}
                        />
                        <Image
                            source={require('../../../imagens/icones/location.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                    </View>

                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Destino"
                            underlineColorAndroid="transparent"
                        />
                        <Image
                            source={require('../../../imagens/icones/location.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                    </View>

                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Data de Saída"
                            underlineColorAndroid="transparent"
                        />
                        <Image
                            source={require('../../../imagens/icones/dateicon.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                    </View>

                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Quantidade de passageiros"
                            underlineColorAndroid="transparent"
                        />
                        <Image
                            source={require('../../../imagens/icones/face.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                    </View>

                    <Button color="white" style={styles.mainButton} onPress={() => handleBuscar()}>
                        BUSCAR
                    </Button>
                </View>

                {/* <View style={styles.logo}>
					<Image source={require('../../../imagens/place.png')} />
				</View> */}
                {/* <Card style={{ ...styles.card, height: 310 }}>
					<Card.Title
						title='Ativar Controlador de Descanso'
						style={styles.titleCard}
						titleStyle={styles.textTitleCard}
					/>
					<Card.Content>
						<View style={styles.contentCard}>
							<Image style={styles.imagem} source={PhoneImage} />
							<Paragraph style={{ marginTop: 10 }}>
								Ative o controlador de descanso, ganhe segurança em suas viagens e aumente sua pontuação
								para ficar em destaque para as empresas contratantes.
							</Paragraph>
						</View>
					</Card.Content>
					<Card.Actions>
						<Button color='white' style={styles.buttonCard}>
							Ativar
						</Button>
					</Card.Actions>
				</Card>				 */}
            </View>
        </ScrollView>
    );
}
