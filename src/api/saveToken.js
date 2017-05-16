import {AsyncStorage } from 'react-native';
const saveToken = async (token)=>{
    try {
        await AsyncStorage.setItem('@token:key', token);
    } catch (error) {
        console.log(error);
    }
}

export default saveToken;