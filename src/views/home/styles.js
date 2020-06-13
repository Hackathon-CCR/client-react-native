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
    width: 10,
    height: 10
  },
  title: {
		fontSize: 24,
		marginHorizontal: 30,
    marginBottom: 5,
    color: "#FFFFFF"
  },
  input: {
		height: 50,
		width: 280,
		backgroundColor: '#FFF',
		marginBottom: 25,
		marginHorizontal: 30,
		fontSize: 16
	},
  titleCard: {
    height: 20,
    backgroundColor: "#32e0c4",
    color: "#FFF",
  },
  textTitleCard: {
    color: "#fff",
  },
  card: {
    width: "100%",
    marginTop: 20,
  },
  buttonCard: {
    backgroundColor: "#393e46",
    color: "#fff",
  },
  imagem: {
    width: 100,
    height: 100,
    display: "flex",
    alignSelf: "center",
    marginTop: 10,
  },
});
