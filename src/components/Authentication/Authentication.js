import React, { Component } from 'react';
import { View,TextInput,Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import imgLogo from '../../media/appIcon/ic_logo.png';
import imgBack from '../../media/appIcon/back_white.png';
export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state={
            isSignIn:true
        };
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
        const {header,inputStyle,bigButton,btnText, iconStyle, titleStyle,container, viewControl,viewInput,viewTextSignIn,viewTextSignUp,activeStyle,inactiveStyle} = styles;
        const signInJSX=(
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={btnText}>
                        SIGN IN NOW
                    </Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX=(
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" />
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TextInput style={inputStyle} placeholder="Re-enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={btnText}>
                        SIGN UP NOW
                    </Text>
                </TouchableOpacity>
            </View>
        );
        const mainJSX=this.state.isSignIn?signInJSX:signUpJSX;
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
    },
    inputStyle:{
        height:50,
        backgroundColor:'#fff',
        marginBottom:10,
        borderRadius:25,
        paddingLeft:20
    },
    bigButton:{
        height:50,
        borderRadius:25,
        borderColor:'#fff',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        color:'#fff',
        fontSize:15
    }

});
