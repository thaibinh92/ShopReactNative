import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native';
import imageProfile from '../../media/temp/profile.png';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogedIn: true
        };
    }
    goToAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    goToOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }
    goToChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }
    render() {
        const { container,profileImg,btnStyle,btnText,btnSignInStyle, btnTextSignIn,textName, sideBar } = styles;
        const logoutJSX=(
            <View>
                <TouchableOpacity style={btnStyle} >
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX=(
            <View style={sideBar}>
                <Text style={textName}>
                    Nguyen Dinh Thai Binh
                </Text>
                <View>
                    <View>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.goToOrderHistory.bind(this)} >
                            <Text style={btnTextSignIn}>Order History</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={btnSignInStyle} onPress={this.goToChangeInfo.bind(this)} >
                            <Text style={btnTextSignIn}>Change Info</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={btnSignInStyle} >
                            <Text style={btnTextSignIn}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View></View>
            </View>
        );
        const mainJSX = this.state.isLogedIn? loginJSX:logoutJSX;
        return (
            <View style={container}>
                <Image source={imageProfile} style={profileImg}/>
                {mainJSX}
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: '#29A188',
       borderRightWidth:2,
       borderColor:'#fff',
       alignItems:'center'
   },
    profileImg:{
        width:150,
        height:150,
        borderRadius:75,
        marginVertical:20
    },
    btnStyle:{
        height:30,
        paddingHorizontal:70,
        backgroundColor:'#fff',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
        color:'#29A188',
        fontSize:12
    },
    btnSignInStyle:{
        height:30,
        backgroundColor:'#fff',
        borderRadius:5,
        justifyContent:'center',
        marginBottom:10,
        width:200,
        paddingLeft:10
    },
    btnTextSignIn:{
        color:'#29A188',
        fontSize:12
    },
    textName:{
        color:'#fff',
        alignItems:'center'
    },
    sideBar:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    }
});
