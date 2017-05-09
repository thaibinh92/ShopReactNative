import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class SearchView extends Component {
    goToProductDetail(){
        const {navigator} = this.props;
        navigator.push({name:'PRODUCT_DETAIL'});
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#c6445a' }}>
                <TouchableOpacity onPress={this.goToProductDetail.bind(this)} >
                    <Text>
                        Go To Product Detail
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
