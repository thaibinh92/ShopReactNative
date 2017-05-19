import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';

const {width, height } = Dimensions.get('window');

export default class Collection extends Component {
    goToListProduct(){
        const {navigator} =this.props;
        navigator.push({name:'LIST_PRODUCT',category:{name:'SPRING COLLECTION',id:'COLECTION'}})
    }
    render() {
        const {wrapper, textStyle, imageStyle}  = styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={textStyle}>
                        SPRING COLLECTION
                    </Text>
                </View>
                <TouchableOpacity style={{flex:4,justifyContent:'flex-end'}} onPress={this.goToListProduct.bind(this)} >
                    <Image source={bannerImage} style={imageStyle}/>
                </TouchableOpacity>
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
