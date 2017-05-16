import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';
import global from '../../Global';

import icHomes from '../../../media/appIcon/home.png';
import icHome from '../../../media/appIcon/home0.png';
import icCarts from '../../../media/appIcon/cart.png';
import icCart from '../../../media/appIcon/cart0.png';
import icSearchs from '../../../media/appIcon/search.png';
import icSearch from '../../../media/appIcon/search0.png';
import icContacts from '../../../media/appIcon/contact.png';
import icContact from '../../../media/appIcon/contact0.png';


export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: []
        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.incrQuantity = this.incrQuantity.bind(this);
        global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.goToSearch = this.goToSearch.bind(this);
    }
    componentDidMount(){
        initData()
        .then((resJSON) => {
            const { type,product }= resJSON;
            this.setState({
                types:type,
                topProducts:product
            });
        });
        getCart()
            .then(cartArray => this.setState({ cartArray}));

    }
    addProductToCart(product){
        const isExist = this.state.cartArray.some(e=>e.product.id === product.id);
        if(isExist) return false;
        this.setState({ cartArray:this.state.cartArray.concat({product,quantity:1}) },
            ()=>saveCart(this.state.cartArray)
        );

    }
    incrQuantity(productId){
        const newCart = this.state.cartArray.map(e=>{
            if(e.product.id !== productId) return e;
            return {product:e.product,quantity:e.quantity+1};
        });
        this.setState({cartArray:newCart},
            ()=>saveCart(this.state.cartArray)
        );

    }
    decrQuantity(productId){
        const newCart = this.state.cartArray.map(e=>{
            if(e.product.id !== productId) return e;
            return {product:e.product,quantity:e.quantity-1};
        });
        this.setState({cartArray:newCart},
            ()=>saveCart(this.state.cartArray)
        );
    }

    removeProduct(productId){
        const newCart = this.state.cartArray.filter(e=> e.product.id !== productId);
        this.setState({cartArray:newCart},
            ()=>saveCart(this.state.cartArray)
        );
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    goToSearch(){
        this.setState({selectedTab:'search'});
    }
    render() {
        return (
            <View style={{ flex: 1 }} >

                <Header onOpen={this.openMenu.bind(this)} />
                
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={icHome} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icHomes} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#2AA188'}}
                    >
                        <Home types={this.state.types} topProducts={this.state.topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={icSearch} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icSearchs} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#2AA188'}}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={icCart} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icCarts} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#2AA188'}}
                        badgeText={this.state.cartArray.length}
                    >
                        <Cart cartArray={this.state.cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={icContact} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icContacts} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#2AA188'}}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: 18,
        height: 18
    }
});