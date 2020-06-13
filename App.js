import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./src/views/home/index";
import Login from "./src/views/login/index";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

StatusBar.setBarStyle("light-content");

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: "#A9432E"
  },
  headerTitleStyle: {
    color: "#FFF"
  },
  headerTintColor: "#FFF",
  headerLeftContainerStyle: {
    paddingLeft: "50%"
  }
};

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={headerOptions} name="Home" component={Home} />
          <Stack.Screen
            options={headerOptions}
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
