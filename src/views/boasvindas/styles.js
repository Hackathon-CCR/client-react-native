import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(196, 196, 196, 0)",
  },
  logo: {
    height: 150,
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  inputArea: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  footer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  description: {
    width: 250,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    top: 6,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  forgot: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.539261)",
    marginHorizontal: 30,
    marginBottom: 5,
    marginTop: 10,
  },
  mainButton: {
    backgroundColor: "#32e0c4",
    color: "#fff",
    width: 125,
    height: 40,
    marginHorizontal: 5,
  },
  secondButton: {
    backgroundColor: "rgba(0, 0, 0, 0.539261)",
    color: "#fff",
    width: 125,
    height: 40,
    marginHorizontal: 5,
  },
});
