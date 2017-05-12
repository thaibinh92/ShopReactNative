import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import signIn from '../../api/signIn';
import global from '../Global';
import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    componentDidMount(){
        getToken()
            .then(a =>console.log('TOKEN====='+a));
    }
    onSignIn(){
        const {email,password} = this.state;
        signIn(email,password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.goBackToMain();
                console.log('SAVE TOKEN');
                saveToken(res.token);
            })
            .catch(err => console.log(err))
    }

    render(){
        const {inputStyle,bigButton,btnText} = styles;
        return(
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChangeText={text=>this.setState({email:text})}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChangeText={text=>this.setState({password:text})}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={btnText}>
                        SIGN IN NOW
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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