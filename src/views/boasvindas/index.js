import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { setFirstTime } from '../../services/auth';

export default function BoasVindas() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.dispatch(StackActions.replace('CardNavegacao'));
    }

    useEffect(() => {
        function setFT() {
            setFirstTime().then((x) => {
                return;
            });
        }

        setFT();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.description}>
                        Seja bem vindo ao Bino ! {'\n'}O seu copiloto 24 horas. Ajuda {'\n'}a você
                        controlar suas viagens, {'\n'}e manter sua saúde em dia. {'\n'}
                        Além disso, nas horas difíceis {'\n'}
                        você pode acionar o SOS, tudo {'\n'}
                        isso sem precisar de internet !
                    </Text>
                </View>
                <View style={styles.logo}>
                    <Image
                        source={require('../../../imagens/welcome.png')}
                        style={{ width: 300, height: 300 }}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <Button color="white" style={styles.mainButton} onPress={() => handleHome()}>
                    EXPLORAR
                </Button>
            </View>
        </ScrollView>
    );
}
