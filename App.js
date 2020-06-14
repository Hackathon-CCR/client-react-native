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
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 768;

    return (
        <PaperProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerType={isLargeScreen ? 'permanent' : 'back'}
                    drawerStyle={isLargeScreen ? null : { width: '70%' }}
                    overlayColor="transparent"
                    initialRouteName="Login"
                >
                    <Drawer.Screen
                        options={{
                            ...headerOptions,
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
                    <Drawer.Screen options={headerOptions} name="Alerta" component={Alerta} />
                    <Drawer.Screen options={headerOptions} name="Saude" component={Saude} />
                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;
