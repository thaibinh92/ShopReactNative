import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity,ListView } from 'react-native';

const {width} = Dimensions.get('window');
const productWidth = (width-40)/2;
const productImageHeight = (productWidth/361) *452;
export default class TopProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        };
    }
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
                <View style={body}>
                    { topProducts.map(e => (
                        <TouchableOpacity style={productContainer} onPress={()=>this.goToProductDetail(e)} key={e.id}>
                            <Image source={{ uri:`http://192.168.1.9/api/images/product/${e.images[0]}` }} style={productImage}/>
                            <Text style={productName}>{ e.name.toUpperCase() }</Text>
                            <Text style={productPrice} >{e.price}$</Text>
                        </TouchableOpacity>
                    )) }
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
