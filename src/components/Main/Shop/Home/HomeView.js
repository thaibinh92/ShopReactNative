import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Collection from  './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component {
    render() {
        const {types} = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#CFCFCF' }}>
                <Collection navigator={this.props.navigator}/>
                <Category navigator={this.props.navigator} types={types} />
                <TopProduct navigator={this.props.navigator} topProducts={this.props.topProducts} />
            </ScrollView>
        );
    }
}
