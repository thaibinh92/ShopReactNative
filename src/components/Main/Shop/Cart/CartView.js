import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class CartView extends Component {
    goToProductDetail(){
        const {navigator} = this.props;
        navigator.push({name:'PRODUCT_DETAIL'});
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#CFCFCF' }}>
                <TouchableOpacity onPress={this.goToProductDetail.bind(this)} >
                    <Text>
                        Go To Product Detail
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
