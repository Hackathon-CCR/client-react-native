import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./src/views/home";

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
