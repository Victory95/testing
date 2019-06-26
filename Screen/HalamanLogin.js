import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default class HalamanLogin extends Component {
  static navigationOptions = 
  {
    title: 'Masuk',
    headerStyle:{
      backgroundColor:'#00BFFF',
    },
    headerTitleStyle:{
        color:'white'
    },
    headerTintColor:'white'
    
  };

  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
    }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
    

render() {
    return (

        <View
            behavior="padding"
            style={styles.Wrapper}>
        
        <TextInput
            placeholder='E-Mail'
            underlineColorAndroid='#D3D3D3'
            placeholderTextColor='#C0C0C0'
            keyboardType='email-address'
            style={styles.inputFieldEmail}/>
        
        <View style = {{alignSelf:'center',flexDirection:'row', borderBottomWidth:0.8, borderBottomColor:'#D3D3D3'}}>
        <TextInput
            placeholder='Kata Sandi'
            placeholderTextColor='#C0C0C0'
            secureTextEntry = { this.state.hidePassword }
            style={styles.inputFieldKataSandi}/>

          <TouchableOpacity activeOpacity = { 0.1 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility } style = {{justifyContent:'flex-end', marginBottom:5}}>
            <Image source = { ( this.state.hidePassword ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = { styles.btnImage2 } />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('LupaKataSandi');}} activeOpacity={0.7}>
            <Text style ={{fontSize:13, marginTop: 25, color:'#00BFFF', marginLeft:180}}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

        <View style = {{marginTop:30}}>
            <Text>
                Atau
            </Text>
        </View>

        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
            <Image
                source={{uri:'https://aboutreact.com/wp-content/uploads/2018/08/google-plus.png',}}
                style={styles.ImageIconStyle}/>
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Masuk dengan Google </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
            <Image
                source={{uri:'https://aboutreact.com/wp-content/uploads/2018/08/facebook.png.png',}}
                style={styles.ImageIconStyle}/>
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Masuk dengan Facebook </Text>
        </TouchableOpacity>
        
        <View style = {{alignSelf:'center',flexDirection:'row', justifyContent:'flex-end',bottom:0, marginTop:65}}>
            <Text>
                Belum Punya Akun ? 
            </Text>
            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('HalamanRegistrasi');}} activeOpacity={0.7}>
                <Text style ={{marginLeft:5, fontSize:14, color:'#00BFFF', justifyContent:'center'}}>Daftar</Text>
            </TouchableOpacity>
        </View>
        </View>
        )}}
        const styles = StyleSheet.create({

        inputFieldEmail: {
        width: 280,
        color: 'black',
        borderColor: '#A9A9A9',
        marginTop: 50,
        },

        inputFieldKataSandi: {
          width: 255,
          color: 'black',
          marginTop:20,
          marginBottom:-10,
          },    

        button: {
        width: '80%',
        height: 45,
        padding: 10,
        backgroundColor: '#00BFFF',
        borderRadius: 8,
        marginTop: 25,
        alignItems:'center',
        justifyContent:'center',
        },

        btnImage2: {
          height: 25,
          width: 25,
          },
         
        buttonText: {
        color: '#fff',
        textAlign: 'center',
        },
        
        Wrapper : {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
        },
        
        text :{
        color: 'blue',
        fontSize: 20
        },

        GooglePlusStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#dc4e41',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 50,
            width: '80%',
            borderRadius: 8,
            margin: 5,
            marginTop:35,
            justifyContent:'flex-start',
            alignSelf:'center'
          },
          FacebookStyle: {
            flexDirection: 'row',
            alignItems:'center',
            backgroundColor: '#485a96',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 50,
            width: '80%',
            borderRadius: 8,
            margin: 5,
            justifyContent:'flex-start',
            alignSelf: 'center'
          },
          ImageIconStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            alignItems: 'center'
          },
          TextStyle: {
            color: '#fff',
            marginBottom: 4,
            marginRight: 15,
          },
          SeparatorLine: {
            backgroundColor: '#fff',
            width: 1,
            height: 40,
            marginRight:40,
          },

          btnImage:{
            resizeMode: 'contain',
            height: '100%',
            width: '100%'
          },
        
        });
 
    