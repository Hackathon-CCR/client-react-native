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
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerItems } from '@react-navigation/drawer';
import ListaCarona from './src/views/lista-carona';
import CadastroCarona from './src/views/cadastro-carona';
import DetalhesCarona from './src/views/detalhes-carona';
import ReservaCarona from './src/views/reserva-carona';
import ConfirmacaoCarona from './src/views/confirmacao-carona';
import CardNavegacao from './src/views/card-navegacao/index';

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

const Drawer = createDrawerNavigator();

function App() {
    //  const dimensions = useWindowDimensions();

    //const isLargeScreen = dimensions.width >= 768;

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Drawer.Screen
                        options={{
                            ...headerOptions,
                            title: 'Boas Vindas',
                        }}
                        name="BoasVindas"
                        component={BoasVindas}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Home' }}
                        name="Home"
                        component={Home}
                    />
                    <Drawer.Screen
                        options={{
                            ...headerOptions,
                            title: 'De volta para casa',
                        }}
                        name="Login"
                        component={Login}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Meu Perfil' }}
                        name="Perfil"
                        component={Perfil}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Lista de Carona' }}
                        name="ListaCarona"
                        component={ListaCarona}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Meus Trajetos' }}
                        name="CadastroCarona"
                        component={CadastroCarona}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Detalhes Carona' }}
                        name="DetalhesCarona"
                        component={DetalhesCarona}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Reservar Carona' }}
                        name="ReservaCarona"
                        component={ReservaCarona}
                    />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Confirmação Carona' }}
                        name="ConfirmacaoCarona"
                        component={ConfirmacaoCarona}
                    />
                    <Drawer.Screen options={headerOptions} name="Alerta" component={Alerta} />
                    <Drawer.Screen options={headerOptions} name="Saude" component={Saude} />
                    <Drawer.Screen
                        options={{ ...headerOptions, title: 'Home' }}
                        name="CardNavegacao"
                        component={CardNavegacao}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;
