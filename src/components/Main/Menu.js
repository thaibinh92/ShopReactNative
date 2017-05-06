import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
    goToAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    goToOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }
    goToChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#d2691e' }}>
                <Text>
                    Component Menu
                </Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)} >
                    <Text>Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeInfo.bind(this)} >
                    <Text>ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)} >
                    <Text>OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
