import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const {height} = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const {wrapper, row1, textInput, iconStyle, titleStyle} = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen} >
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>
                        Wearing a Dress
                    </Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput style={textInput} placeholder='What do you want to buy?' underlineColorAndroid='transparent' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        height: height / 8,
        backgroundColor: '#2AA188',
        padding:10,
        justifyContent: 'space-between'
    },
    row1:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput:{
        height: height/18,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingVertical:0
    },
    iconStyle:{
        width:20,
        height:20
    },
    titleStyle:{
        color:'#fff',
        fontSize: 15
    }
});
