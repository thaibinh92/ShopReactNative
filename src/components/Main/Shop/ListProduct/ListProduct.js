import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, StyleSheet, Image,ListView, RefreshControl} from 'react-native';

import getListProduct from '../../../../api/getListProduct';
import global from '../../../Global';
import imgBack from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
const urlImage = global.URL+'images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class ListProduct extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged : (r1,r2) => r1 !== r2 });
        this.state={
            listPropduct : ds,
            onRefreshing:false,
            page:1
        }
        this.arr=[];
    }
    componentDidMount(){
        const idType = this.props.category.id;
        getListProduct(idType,1)
            .then(arrProduct =>{
                this.arr=arrProduct;
                this.setState({ listPropduct:this.state.listPropduct.cloneWithRows(this.arr) })
            })
            .catch(err => console.log(err));
    }

    backToMain(){
        const {navigator} = this.props;
        navigator.pop();
    }
    goToDetail(product){
        const {navigator} = this.props;
        navigator.push({name:"PRODUCT_DETAIL",product});
    }
    render() {
        const {container,header,wrapper,backStyle,titleStyle,productContainer,productInfo,
            productImage,lastRowInfo,txtName,txtPrice,txtMaterial,txtColor,txtShow} = styles;
        const {category} = this.props;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.backToMain.bind(this)}>
                            <Image source={imgBack} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={{width:30}}></View>
                    </View>
                    <ListView
                        dataSource={this.state.listPropduct}
                        renderRow={productItem=>(
                            <View style={productContainer}>
                                <Image source={{ uri: `${urlImage}${productItem.images[0]}` }} style={productImage}/>
                                <View style={productInfo}>
                                    <Text style={txtName}>
                                        { toTitleCase(productItem.name)}
                                    </Text>
                                    <Text style={txtPrice}>
                                        {productItem.price}$
                                    </Text>
                                    <Text style={txtMaterial}>
                                        Material {productItem.material}
                                    </Text>
                                    <View style={lastRowInfo}>
                                        <Text style={txtColor}>Color {productItem.color}</Text>
                                        <View style={{backgroundColor:productItem.color.toLowerCase(),height:14,width:14, borderRadius:7}}>
                                        </View>
                                        <TouchableOpacity onPress={()=>this.goToDetail(productItem)}>
                                            <Text style={txtShow}>SHOW DETAIL</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.onRefreshing}
                                onRefresh={()=>{
                                    this.setState({ onRefreshing:true});
                                    const newPage = this.state.page+1;
                                    const idType = category.id;
                                    getListProduct(idType,newPage)
                                    .then(arrProduct =>{
                                        this.arr= arrProduct.concat(this.arr);
                                        this.setState({
                                            listPropduct:this.state.listPropduct.cloneWithRows(this.arr),
                                            onRefreshing:false
                                        })
                                    })
                                    .catch(err => console.log(err));
                                }
                                }
                            />
                        }
                    />


                </View>

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
    }

});
