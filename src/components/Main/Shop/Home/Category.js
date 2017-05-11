import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import global from '../../../Global';

import littleImage from '../../../../media/temp/little.jpg';
import maxiImage from '../../../../media/temp/maxi.jpg';
import partyImage from '../../../../media/temp/party.jpg';
import midiImage from '../../../../media/temp/midi.jpg';

const URL = global.URL+'images/type/'
const {width, height } = Dimensions.get('window');

export default class Category extends Component {
    goToListProduct(){
        const {navigator} = this.props;
        navigator.push({name:"LIST_PRODUCT"})
    }
    render() {
        const {wrapper, textStyle, imageStyle,cateTitle}  = styles;
        const {types}=this.props;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={textStyle}>
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={{flex:4,justifyContent:'flex-end'}}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        { types.map(e => (
                            <TouchableOpacity onPress={this.goToListProduct.bind(this)} key={e.id} >
                                <Image source={{ uri:`${URL}${e.image}` }} style={imageStyle}>
                                    <Text style={cateTitle}>{e.name} </Text>
                                </Image>
                            </TouchableOpacity>
                        )) }
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
