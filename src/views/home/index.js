import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles';
import PhoneImage from '../../../imagens/icones/phone.png';
import SosImage from '../../../imagens/icones/sos.png';
import SaudeImage from '../../../imagens/icones/health.png';
import RankingImage from '../../../imagens/icones/ranking_1.png';

export default function Home(props) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Card style={{ ...styles.card, height: 310 }}>
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
				</Card>

				<Card style={{ ...styles.card, height: 270 }}>
					<Card.Title title='Alerta de Perigo' style={styles.titleCard} titleStyle={styles.textTitleCard} />
					<Card.Content>
						<Image style={styles.imagem} source={SosImage} />
						<Paragraph style={{ marginTop: 10 }}>
							Acione o alerta para uma central de monitoramento e aguarde o socorro.
						</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button
							color='white'
							style={styles.buttonCard}
							onPress={() => props.navigation.navigate('Alerta')}
						>
							Acionar
						</Button>
					</Card.Actions>
				</Card>

				<Card style={{ ...styles.card, height: 270 }}>
					<Card.Title title='Saúde' style={styles.titleCard} titleStyle={styles.textTitleCard} />
					<Card.Content>
						<Image style={styles.imagem} source={SaudeImage} />
						<Paragraph style={{ marginTop: 10 }}>
							Acompanhe seus exames feitos nos postos da CCR e receba seus exames via App.
						</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button
							color='white'
							style={styles.buttonCard}
							onPress={() => props.navigation.navigate('Saude')}
						>
							Ver
						</Button>
					</Card.Actions>
				</Card>

				<Card style={{ ...styles.card, height: 290 }}>
					<Card.Title title='Frete Ranking' style={styles.titleCard} titleStyle={styles.textTitleCard} />
					<Card.Content>
						<Image style={styles.imagem} source={RankingImage} />
						<Paragraph style={{ marginTop: 10 }}>
							Mostre que você é um profissional exemplar e destaque-se para as empresas encontrar o seu
							perfil.
						</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button color='white' style={styles.buttonCard}>
							Acessar
						</Button>
					</Card.Actions>
				</Card>
			</View>
		</ScrollView>
	);
}
