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
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    inputArea: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    footer: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    input: {
        height: 50,
        width: 280,
        backgroundColor: '#FFF',
        marginBottom: 8,
        marginHorizontal: 30,
        fontSize: 16,
    },
    description: {
        fontSize: 14,
        marginHorizontal: 30,
        marginBottom: 5,
    },
    forgot: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.539261)',
        marginHorizontal: 30,
        marginBottom: 5,
        marginTop: 10,
    },
    mainButton: {
        backgroundColor: '#32E0C4',
        color: '#fff',
        width: 157,
        height: 40,
        marginHorizontal: 5,
    },
    secondButton: {
        backgroundColor: '#393e46',
        color: '#fff',
        width: 157,
        height: 40,
        marginHorizontal: 5,
    },
});
