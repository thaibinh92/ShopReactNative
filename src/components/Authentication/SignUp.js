import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput,Alert } from 'react-native';
import register from '../../api/register';

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            rePassword:''
        }
    }
    registerUser(){
        const {name,email,password}= this.state;
        register(email,name,password)
            .then(res=>{
                if(res==='THANH_CONG') return this.onSuccess();
                this.onFail();
            });
    }

    onSuccess(){
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                {text:'OK',onPress: this.props.gotoSignIn()}
            ],
            {cancelable:false}

        )
    }
    onFail(){
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                {text:'OK',onPress:()=>console.log('Ask me later pressed')}
            ],
            {cancelable:false}

        )
    }

    render(){
        const {inputStyle,bigButton,btnText} = styles;
        return(
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChangeText={text=>this.setState({name:text})}
                />
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
                <TextInput
                    style={inputStyle}
                    placeholder="Re-enter your password"
                    value={this.state.rePassword}
                    secureTextEntry
                    onChangeText={text=>this.setState({rePassword:text})}
                />
                <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)} >
                    <Text style={btnText}>
                        SIGN UP NOW
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