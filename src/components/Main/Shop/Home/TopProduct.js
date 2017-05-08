import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const {width} = Dimensions.get('window');
const productWidth = (width-40)/2;
const productImageHeight = (productWidth/361) *452;
export default class TopProduct extends Component {
    render() {
        const {container,titleContainer,title,body,productContainer,productImage,productName,productPrice}  = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>
                        Top Product
                    </Text>
                </View>
                <View style={body}>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice} >400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp2} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice} >150$</Text>
                    </View>
                    <View style={{height:10,width}}></View>
                    <View style={productContainer}>
                        <Image source={sp3} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice} >150$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp4} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice} >150$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        margin:10,
        shadowColor:'#2B2B2B',
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.2,
    },
    titleContainer: {
        height:50,
        justifyContent:'center',
        paddingLeft:10

    },
    title:{
        color:'#B0B0B0',
        fontSize:20
    },
    body:{
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    productContainer:{
        width:productWidth,
        shadowColor:'#2B2B2B',
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.2,
        paddingBottom:20,
        elevation:2
    },
    productImage:{
        width:productWidth,
        height:productImageHeight
    },
    productName:{
        paddingLeft:10,
        color:'#B0B0B0',
        fontWeight:"500"
    },
    productPrice:{
        paddingLeft:10,
        color:'#4765e9'
    }

});
