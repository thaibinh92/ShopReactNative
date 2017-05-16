import {AsyncStorage } from 'react-native';
const saveCart = async (cartArray)=>{
    try {
        await AsyncStorage.setItem('@cart:key', JSON.stringify(cartArray));
    } catch (error) {
        console.log(error);
    }
}

export default saveCart;