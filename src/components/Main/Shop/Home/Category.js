import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import littleImage from '../../../../media/temp/little.jpg';
import maxiImage from '../../../../media/temp/maxi.jpg';
import partyImage from '../../../../media/temp/party.jpg';
import midiImage from '../../../../media/temp/midi.jpg';

const {width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const {wrapper, textStyle, imageStyle,cateTitle}  = styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={textStyle}>
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={{flex:4,justifyContent:'flex-end'}}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        <Image source={littleImage} style={imageStyle}>
                            <Text style={cateTitle}>Little Dress</Text>
                        </Image>
                        <Image source={midiImage} style={imageStyle}>
                            <Text style={cateTitle}>Midi Dress</Text>
                        </Image>
                        <Image source={maxiImage} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={partyImage} style={imageStyle}>
                            <Text style={cateTitle}>Party Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width-40;
const imageHeight = (imageWidth/933)*465;

const styles = StyleSheet.create({
    wrapper:{
        height:height * 0.33,
        backgroundColor:'#fff',
        margin:10,
        shadowColor:'#2B2B2B',
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.2,
        padding:10,
        paddingTop:0
    },
    textStyle:{
        fontSize:18,
        color:'#B0B0B0'
    },
    imageStyle:{
        height:imageHeight,
        width:imageWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    cateTitle:{
        fontSize:15,
        color:'#B0B0B0'
    }
});
