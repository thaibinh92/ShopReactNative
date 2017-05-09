import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

import imgBack from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
export default class ListProduct extends Component {
    backToMain(){
        const {navigator} = this.props;
        navigator.pop();
    }
    goToDetail(){
        const {navigator} = this.props;
        navigator.push({name:"PRODUCT_DETAIL"});
    }
    render() {
        const {container,header,wrapper,backStyle,titleStyle,productContainer,productInfo,
            productImage,lastRowInfo,txtName,txtPrice,txtMaterial,txtColor,txtShow,iconStyle} = styles;
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.backToMain.bind(this)}>
                            <Image source={imgBack} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{width:30}}></View>
                    </View>

                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <View style={productInfo}>
                            <Text style={txtName}>
                                Lace Sleeve Si
                            </Text>
                            <Text style={txtPrice}>
                                118$
                            </Text>
                            <Text style={txtMaterial}>
                                Material silk
                            </Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconStyle}>
                                </View>
                                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                    <Text style={txtShow}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <View style={productInfo}>
                            <Text style={txtName}>
                                Lace Sleeve Si
                            </Text>
                            <Text style={txtPrice}>
                                118$
                            </Text>
                            <Text style={txtMaterial}>
                                Material silk
                            </Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconStyle}>
                                </View>
                                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                    <Text style={txtShow}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <View style={productInfo}>
                            <Text style={txtName}>
                                Lace Sleeve Si
                            </Text>
                            <Text style={txtPrice}>
                                118$
                            </Text>
                            <Text style={txtMaterial}>
                                Material silk
                            </Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconStyle}>
                                </View>
                                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                    <Text style={txtShow}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <View style={productInfo}>
                            <Text style={txtName}>
                                Lace Sleeve Si
                            </Text>
                            <Text style={txtPrice}>
                                118$
                            </Text>
                            <Text style={txtMaterial}>
                                Material silk
                            </Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconStyle}>
                                </View>
                                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                    <Text style={txtShow}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <View style={productInfo}>
                            <Text style={txtName}>
                                Lace Sleeve Si
                            </Text>
                            <Text style={txtPrice}>
                                118$
                            </Text>
                            <Text style={txtMaterial}>
                                Material silk
                            </Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconStyle}>
                                </View>
                                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                                    <Text style={txtShow}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'#CFCFCF',
         padding:10
     },
    wrapper:{
        backgroundColor:'#fff',
        paddingHorizontal:10
    },
    header:{
        height:50,
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    backStyle:{
        width:30,
        height:30
    },
    titleStyle:{
        color:'#C21C70',
        fontSize:20
    },
    productContainer:{
        flexDirection:'row',
        paddingVertical:15,
        borderTopWidth:1,
        borderTopColor:'#CFCFCF'
    },
    productInfo:{
        justifyContent:'space-between',
        marginLeft:10,
        flex:1
    },
    productImage:{
        width:90,
        height:(90 *452)/361
    },
    lastRowInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    txtName:{
        color:'#BABABA',
        fontSize:18,
        fontWeight:"400"
    },
    txtPrice:{
        color:'#C21C70'
    },
    txtMaterial:{

    },
    txtColor:{

    },
    txtShow:{
        fontSize:11,
        color:'#C21C70'
    },
    iconStyle:{
        backgroundColor:'#2032ff',
        height:14,
        width:14,
        borderRadius:7
    }

});
