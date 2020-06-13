import React from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { styles } from './styles';
import PhoneImage from '../../../imagens/icones/phone.png';

export default function Home(props) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#6ED4C8' }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Para onde você quer ir?</Text>

                    <TextInput style={styles.input} placeholder="" autoCorrect={false} />
                    <TextInput style={styles.input} placeholder="" autoCorrect={false} />
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
