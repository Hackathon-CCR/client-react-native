import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function CadastroCarona() {
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [valor, setValor] = useState('');
    const [hora, setHora] = useState('');

    const trajetosCadastrados = [
        {
            key: 1,
            origem: 'Taubaté - SP',
            destino: 'Juiz de Fora - MG',
            valor: 20.0,
            data: '01/01/2019 12:00',
        },
        {
            key: 2,
            origem: 'Taubaté - SP',
            destino: 'Juiz de Fora - MG',
            valor: 20.0,
            data: '01/01/2019 12:00',
        },
        {
            key: 3,
            origem: 'Taubaté - SP',
            destino: 'Juiz de Fora - MG',
            valor: 20.0,
            data: '01/01/2019 12:00',
        },
        {
            key: 4,
            origem: 'Taubaté - SP',
            destino: 'Juiz de Fora - MG',
            valor: 20.0,
            data: '01/01/2019 12:00',
        },
        {
            key: 5,
            origem: 'Taubaté - SP',
            destino: 'Juiz de Fora - MG',
            valor: 20.0,
            data: '01/01/2019 12:00',
        },
        {
            key: 6,
            origem: 'Taubaté - SP',
            destino: 'Juiz de Fora - MG',
            valor: 20.0,
            data: '01/01/2019 12:00',
        },
    ];

    const deviceWidth = Dimensions.get('window').width;

    return (
        <ScrollView style={{ width: deviceWidth }}>
            <View style={styles.container}>
                <Card style={{ ...styles.card }}>
                    <Card.Title
                        title="Cadastrar Trajeto"
                        style={styles.titleCard}
                        titleStyle={styles.textTitleCard}
                    />
                    <Card.Content>
                        <View style={styles.contentCard}>
                            <TextInput
                                style={styles.input}
                                value={origem}
                                onChange={(e) => setOrigem(e.target.value)}
                                label="Origem"
                            />
                            <TextInput
                                style={styles.input}
                                value={destino}
                                onChange={(e) => setDestino(e.target.value)}
                                label="Destino"
                            />
                            <TextInput
                                style={styles.input}
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                label="Valor"
                            />
                            <TextInput
                                style={styles.input}
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                label="Data"
                            />
                        </View>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Cancelar</Button>
                        <Button>Cadastrar</Button>
                    </Card.Actions>
                </Card>

                {trajetosCadastrados.map((x) => {
                    return (
                        <Card key={x.key} style={{ ...styles.card, height: 150 }}>
                            <Card.Title
                                title={'Trajeto - ' + x.key}
                                style={styles.titleCard}
                                titleStyle={styles.textTitleCard}
                            />
                            <Card.Content>
                                <View style={styles.contentCard}>
                                    <Text>Origem: {x.origem}</Text>
                                    <Text>Destino: {x.destino}</Text>
                                    <Text>Valor: {x.valor}</Text>
                                    <Text>Data: {x.data}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    );
                })}
            </View>
        </ScrollView>
    );
}
