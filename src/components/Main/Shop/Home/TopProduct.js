import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity,ListView } from 'react-native';
import global from '../../../Global';

const {width} = Dimensions.get('window');
const productWidth = (width-40)/2;
const productImageHeight = (productWidth/361) *452;
const URL = global.URL+'images/product/';


export default class TopProduct extends Component {
    goToProductDetail(product){
        const {navigator} = this.props;
        navigator.push({name:'PRODUCT_DETAIL',product});
    }
    render() {
        const {topProducts}=this.props;
        const {container,titleContainer,title,body,productContainer,productImage,productName,productPrice}  = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>
                        Top Product
                    </Text>
                </View>
                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={ new ListView.DataSource({ rowHasChanged:(r1,r2)=>r1!==r2 }).cloneWithRows(topProducts) }
                    renderRow={(value)=>(
                        <TouchableOpacity style={productContainer} onPress={()=>this.goToProductDetail(value)} key={value.id}>
                            <Image source={{ uri:`${URL}${value.images[0]}` }} style={productImage}/>
                            <Text style={productName}>{ value.name.toUpperCase() }</Text>
                            <Text style={productPrice} >{value.price}$</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionID,rowID)=>{
                        if(rowID%2 === 1){
                            return (
                                <View style={{width,height:10}}></View>
                            )
                        }
                    }}

                />
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
