import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleLogin() {
        if (login === 'admin' && password === 'admin') {
            navigation.jumpTo('BoasVindas');
        } else {
            Toast.show('Falha ao autenticar, verifique seus dados!', {
                containerStyle: {
                    backgroundColor: '#f00',
                    borderRadius: 15,
                },
                textStyle: {
                    color: '#fff',
                },
                duration: 2000,
                animation: true,
            });
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../../imagens/logoNova.png')}
                            style={{ marginLeft: 20 }}
                        />
                    </View>
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.description}>Login</Text>

                    <TextInput
                        style={styles.input}
                        placeholder=""
                        autoCorrect={false}
                        onChangeText={setLogin}
                    />

                    <Text style={styles.description}>Senha</Text>

                    <TextInput
                        style={styles.input}
                        placeholder=""
                        autoCorrect={false}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />

                    <Text style={styles.forgot}>Esqueci a senha</Text>
                </View>
                <View style={styles.footer}>
                    <Button color="white" style={styles.mainButton} onPress={() => handleLogin()}>
                        ENTRAR
                    </Button>
                    <Button color="white" style={styles.secondButton} onPress={() => handleLogin()}>
                        CADASTRAR
                    </Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Login;
