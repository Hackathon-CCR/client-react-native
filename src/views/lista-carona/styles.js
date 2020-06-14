import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(196, 196, 196, 0)',
    },
    imagemCarona: {
        width: 75,
        height: 75,
    },
    listCaronas: {
        fontWeight: '900',
        fontSize: 27,
        color: '#393E46',
    },
    cardViajem: {
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        height: 110,
    },
    imagemViajem: {
        width: 75,
        height: 75,
        borderRadius: 100,
    },
    containerInCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    notaStar: {
        width: 20,
        height: 20,
    },
    horaCard: {
        color: '#D3D3D3',
    },
});
