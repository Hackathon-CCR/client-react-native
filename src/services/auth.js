import { AsyncStorage } from 'react-native';

const KEY = 'auth_token';
const KEY_FIRST_TIME = 'first_time_app';

export async function setAuth() {
    await AsyncStorage.setItem(KEY, 'true');
}

export async function isAuthenticated() {
    const token = await AsyncStorage.getItem(KEY);

    return !!token;
}

export async function logout() {
    await AsyncStorage.removeItem(KEY);
}

export async function IsFirstTime() {
    const ft = await AsyncStorage.getItem(KEY_FIRST_TIME);

    return !ft;
}

export async function setFirstTime() {
    await AsyncStorage.setItem(KEY_FIRST_TIME, 'true');
}
