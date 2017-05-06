import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';
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
            selectedTab: 'home'
        };
    }
    openMenu() {
        const { open } = this.props;
        open();
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
                        <Home />
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
                        badgeText="1"
                    >
                        <Cart />
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