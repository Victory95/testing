import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class HalamanLogin extends Component {
  static navigationOptions = 
  {
    title: 'Lupa Kata Sandi',
    headerStyle:{
      backgroundColor:'#00BFFF',
    },
    headerTitleStyle:{
        color:'white'
    },
    headerTintColor:'white'
    
  };

  render() {
    return (

        <ScrollView style = {{flex:1,backgroundColor:'#fff'}}>
    <View
        behavior="padding"
        style={styles.Wrapper}>

    <View style={{flex:1, alignItems:"center", justifyContent:'flex-start', marginTop:35}}>
      <Image style={{width: 250, height: 150}}
       resizeMode="contain"
       source={{ uri: 'https://brandmark.io/logo-rank/random/bp.png' }}/>
       

    <View style = {{marginTop:20, justifyContent:'center'}}>
    <Text style = {{fontSize:25, color:'grey', alignItems:'center'}}>
      Lupa Kata Sandi ? 
    </Text>
    </View>

    <Text style = {{textAlign:'center', margin:10, color:'grey'}}>
        Kami memerlukan email anda yang terdaftar untuk mengirimkan instruksi pengaturan ulang kata sandi
    </Text>
        
            <TextInput
                placeholder='Email'
                underlineColorAndroid='#D3D3D3'
                placeholderTextColor='#C0C0C0'
                keyboardType='email-address'
                style={styles.inputFieldEmail}/>

    </View>

    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
        <Text style ={styles.buttonText}>Ubah Kata Sandi</Text>
    </TouchableOpacity>

        </View>
        </ScrollView>

)}}

const styles = StyleSheet.create({

    Wrapper : {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    inputFieldEmail: {
        width: 280,
        color: 'black',
        borderColor: '#A9A9A9',
        marginTop: 50,
        },

    button: {
        width: '80%',
        height: 45,
        padding: 10,
        backgroundColor: '#00BFFF',
        borderRadius: 8,
        marginTop: 30,
        alignItems:'center',
        justifyContent:'center',
        },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        },
    });