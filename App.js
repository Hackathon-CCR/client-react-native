import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/views/home/index';
import Login from './src/views/login/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Alerta from './src/views/alerta/index';
import Saude from './src/views/saude';
import BoasVindas from './src/views/boasvindas';
import Perfil from './src/views/perfil';

StatusBar.setBarStyle('light-content');

const Stack = createStackNavigator();

const headerOptions = {
    headerStyle: {
        backgroundColor: '#32e0c4',
    },
    headerTitleStyle: {
        color: '#FFF',
    },
    headerTintColor: '#FFF',
};

function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        options={{ ...headerOptions, title: 'Bem vindo' }}
                        name="BoasVindas"
                        component={BoasVindas}
                    />
                    <Stack.Screen
                        options={{ ...headerOptions, title: 'Home' }}
                        name="Home"
                        component={Login}
                    />
                    <Stack.Screen
                        options={{ ...headerOptions, title: 'De volta para casa' }}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        options={{ ...headerOptions, title: 'Meu Perfil' }}
                        name="Perfil"
                        component={Perfil}
                    />
                    <Stack.Screen options={headerOptions} name="Alerta" component={Alerta} />
                    <Stack.Screen options={headerOptions} name="Saude" component={Saude} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;
