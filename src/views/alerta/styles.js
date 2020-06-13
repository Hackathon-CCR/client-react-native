import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  titleCard: {
    height: 20,
    backgroundColor: "#A9432E",
    color: "#FFF"
  },
  textTitleCard: {
    color: "#fff"
  },
  card: {
    width: "100%",
    marginTop: 20
  },
  buttonCard: {
    backgroundColor: "#A9432E",
    color: "#fff"
  },
  circleContainer: {
    width: "100%",
    justifyContent: "center"
  },
  text: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 20
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 120,
    marginRight: 100,
    height: 150,
    width: 150,
    backgroundColor: "#A9432E",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  imagem: {
    width: 100,
    height: 100,
    display: "flex",
    alignSelf: "center",
    marginTop: 10
  }
});
