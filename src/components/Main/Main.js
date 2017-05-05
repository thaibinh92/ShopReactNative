import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Main extends Component {
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
            <View style={{ flex: 1, backgroundColor: '#006400' }}>
                <Text>
                    Main Component
                </Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeInfo.bind(this)}>
                    <Text>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
                    <Text>Go to Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
