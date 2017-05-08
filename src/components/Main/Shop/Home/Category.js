import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';

const {width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const {wrapper, textStyle, imageStyle}  = styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={textStyle}>
                        SPRING COLLECTION
                    </Text>
                </View>
                <View style={{flex:4}}>
                    <Image source={bannerImage} style={imageStyle}/>
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
        width:imageWidth
    }
});
