import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from './styles';
import PerfilImage from '../../../imagens/perfil/admin.jpg';
import StarImage from '../../../imagens/perfil/star.png';

export default function Perfil({ route }) {
    const { viajem } = route.params;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={PerfilImage} style={styles.perfilImage}></Image>
                <Text style={styles.textNome}>{viajem.Nome}</Text>
                <Text style={styles.textIdade}>39 anos</Text>
                <View style={styles.containerCard}>
                    <Image source={StarImage} style={styles.starImage}></Image>
                    <Text style={styles.textAvaliacao}>{viajem.Nota}</Text>
                </View>

                <View style={styles.divLine}></View>
                <View style={styles.containerCard}>
                    <Text style={styles.textCinza}>Sexo</Text>
                </View>
                <View style={styles.containerCard}>
                    <Text style={styles.textBlack}>Masculino</Text>
                </View>

                <View style={styles.divLine}></View>
                <View style={styles.containerCard}>
                    <Text style={styles.textCinza}>Empresa</Text>
                </View>
                <View style={styles.containerCard}>
                    <Text style={styles.textBlack}>Trans - Herculano</Text>
                </View>

                <View style={styles.divLine}></View>
                <View style={styles.containerCard}>
                    <Card style={styles.cardBio}>
                        <Card.Content>
                            <Text>BIOGRAFIA</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.containerCard}>
                    <Text style={styles.textBlack}>
                        Olá, meu nome é João Emanuel, sou caminhoneiro há 20 anos e sem nenhuma
                        multa. Dirijo com cuidado e não corro.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
