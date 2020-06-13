import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(196, 196, 196, 0)',
        marginTop: 30,
    },
    perfilImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    textNome: {
        fontSize: 22,
        margin: 20,
        color: '#393e46',
    },
    textIdade: {
        marginBottom: 20,
    },
    starImage: {
        marginTop: 9,
        justifyContent: 'flex-start',
        width: 22,
        height: 22,
    },
    containerCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
    },
    textAvaliacao: {
        marginLeft: 10,
        marginTop: 10,
    },
    divLine: {
        margin: 10,
        height: 1,
        backgroundColor: '#393e46',
        width: '100%',
    },
    textCinza: {
        color: '#393e46',
    },
    textBlack: {
        color: '#222831',
        marginLeft: 10,
    },
    cardBio: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
});
