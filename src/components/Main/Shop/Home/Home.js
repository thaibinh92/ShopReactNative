import React, { Component } from 'react';
import { Navigator } from 'react-native';

import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

export default class Home extends Component {
    render() {
        const {types} = this.props;
        return (
            <Navigator initialRoute={{ name:'HOME_VIEW'}}
                    renderScene={(route,navigator)=>{
                        switch (route.name) {
                            case 'HOME_VIEW' : return <HomeView navigator={navigator} types={types} topProducts={this.props.topProducts} />
                            case 'LIST_PRODUCT':return <ListProduct navigator={navigator} product={route.product} category={route.category} />
                            default: return <ProductDetail navigator={navigator} product={route.product} />
                        }
                    }}
            />
        );
    }
}
