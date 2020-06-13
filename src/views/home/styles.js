import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(196, 196, 196, 0)',
    },
    logo: {
        width: 10,
        height: 10,
    },
    title: {
        fontSize: 24,
        marginHorizontal: 30,
        marginBottom: 20,
        color: 'black',
    },
    input: {
        height: 40,
        width: 280,
        backgroundColor: '#FFF',
        marginBottom: 35,
        borderStyle: 'solid',
        marginHorizontal: 30,
        fontSize: 16,
        padding: 10,
    },
    mainButton: {
        backgroundColor: '#393E46',
        color: '#fff',
        width: 157,
        height: 40,
        marginHorizontal: 5,
        marginTop: 25,
    },
    tinyLogo: {
        width: 60,
        height: 60,
        marginBottom: 15,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.1,
        height: 40,
        width: 300,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        marginBottom: 20,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 5,
        width: 5,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    titleCard: {
        height: 20,
        backgroundColor: '#32e0c4',
        color: '#FFF',
    },
    textTitleCard: {
        color: '#fff',
    },
    card: {
        width: '100%',
        marginTop: 20,
    },
    buttonCard: {
        backgroundColor: '#393e46',
        color: '#fff',
    },
    imagem: {
        width: 100,
        height: 100,
        display: 'flex',
        alignSelf: 'center',
        marginTop: 10,
    },
});
