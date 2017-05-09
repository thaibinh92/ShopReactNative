import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
    backToMain(){
        const {navigator} = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#2d988e'}}>
                <TouchableOpacity onPress={this.backToMain.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
