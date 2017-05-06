import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#daa520' }}>
                <Text>
                    Home Component
                </Text>
            </View>
        );
    }
}
