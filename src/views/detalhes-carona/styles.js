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
        alignContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: -70,
        marginBottom: 10,
    },
    textInfo: {
        fontSize: 16,
        color: 'white',
        paddingBottom: 5,
    },
    cardViajem: {
        width: '100%',
        height: 220,
        backgroundColor: '#32e0c4',
        paddingHorizontal: 30,
        paddingTop: 10,
        position: 'relative',
    },
    containerInCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#32e0c4',
    },
    cardSecundario: {
        width: '100%',
        height: 220,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 30,
        paddingTop: 10,
        position: 'relative',
    },
    containerInCardSecundario: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FAFAFA',
    },
    textInfoSecundario: {
        fontSize: 20,
        color: 'black',
    },
    footerCardSecundario: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
