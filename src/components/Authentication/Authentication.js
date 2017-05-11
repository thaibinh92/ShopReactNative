import React, { Component } from 'react';
import { View,TextInput,Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import imgLogo from '../../media/appIcon/ic_logo.png';
import imgBack from '../../media/appIcon/back_white.png';
import register from '../Authentication/Authentication';

import SignIn from  '../Authentication/SignIn';
import SignUp from  '../Authentication/SignUp';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state={
            isSignIn:true
        };
    }

    gotoSignIn(){
        this.setState({isSignIn:true})
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    signIn(){
        this.setState({
            isSignIn:true
        })
    }
    signUp(){
        this.setState({
            isSignIn:false
        })
    }
    render() {
        const {header, iconStyle, titleStyle,container, viewControl,viewTextSignIn,viewTextSignUp,activeStyle,inactiveStyle} = styles;

        const mainJSX=this.state.isSignIn?<SignIn goBackToMain={this.goBackToMain.bind(this)} />:<SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)} >
                        <Image source={imgBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>
                        Wearing a Dress
                    </Text>
                    <Image source={imgLogo} style={iconStyle} />
                </View>

                {mainJSX}

                <View style={viewControl}>
                    <TouchableOpacity style={viewTextSignIn} onPress={this.signIn.bind(this)} >
                        <Text style={this.state.isSignIn?activeStyle:inactiveStyle}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={viewTextSignUp} onPress={this.signUp.bind(this)} >
                        <Text style={this.state.isSignIn?inactiveStyle:activeStyle}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#33AA76',
        justifyContent: 'space-between',
        padding:20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    iconStyle:{
        width:25,
        height:25
    },
    titleStyle:{
        color:'#fff',
        fontSize: 25
    },
    viewControl:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewInput:{

    },
    viewTextSignIn:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
        paddingVertical:15,
        marginRight:1
    },
    viewTextSignUp:{
        backgroundColor:'#fff',
        alignItems:'center',
        flex:1,
        borderBottomRightRadius:30,
        borderTopRightRadius:30,
        paddingVertical:15,
        marginLeft:1
    },
    activeStyle:{
        color:'#33AA76',
        fontSize:18
    },
    inactiveStyle:{
        color:'#bebebe',
        fontSize:18
    }

});
