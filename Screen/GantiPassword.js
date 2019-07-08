import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';


export default class GantiPassword extends Component {
  static navigationOptions = 
  {
    title: 'Ganti Kata Sandi',
    headerStyle:{
      backgroundColor:'#00BFFF',
    },
    headerTitleStyle:{
        color:'white'
    },
    headerTintColor:'white'
    
  };

  constructor () {
    super()
    this.state = {
        hidePassword: true,
        hidePassword2: true,
        hidePassword3: true,
    }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  managePasswordVisibility2 = () =>
  {
    this.setState({ hidePassword2: !this.state.hidePassword2 });
  }

  managePasswordVisibility3 = () =>
  {
    this.setState({ hidePassword3: !this.state.hidePassword3 });
  }

  render() { 
    return (
        <View style={{marginTop:30}}>
            <View style = {{alignSelf:'center',flexDirection:'row', borderBottomWidth:0.8, borderBottomColor:'#D3D3D3'}}>
                <TextInput
                    placeholder='Kata Sandi Lama'
                    placeholderTextColor='#C0C0C0'
                    secureTextEntry = { this.state.hidePassword }
                    style={styles.inputFieldKataSandi}/>

                    <TouchableOpacity activeOpacity = { 0.1 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility } style = {{justifyContent:'flex-end', marginBottom:5}}>
                        <Image source = { ( this.state.hidePassword ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = { styles.btnImage } />
                    </TouchableOpacity>
            </View>

            <View style = {{alignSelf:'center',flexDirection:'row', borderBottomWidth:0.8, borderBottomColor:'#D3D3D3'}}>
                    <TextInput
                        placeholder='Kata Sandi Baru'
                        placeholderTextColor='#C0C0C0'
                        secureTextEntry = { this.state.hidePassword2 }
                        style={styles.inputFieldKataSandi}/>

                    <TouchableOpacity activeOpacity = { 0.1 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility2 } style = {{justifyContent:'flex-end', marginBottom:5}}>
                        <Image source = { ( this.state.hidePassword2 ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = { styles.btnImage } />
                    </TouchableOpacity>
            </View>

            <View style = {{alignSelf:'center',flexDirection:'row', borderBottomWidth:0.8, borderBottomColor:'#D3D3D3'}}>
                    <TextInput
                        placeholder='Konfirmasi Kata Sandi'
                        placeholderTextColor='#C0C0C0'
                        secureTextEntry = { this.state.hidePassword3 }
                        style={styles.inputFieldKataSandi}/>

                    <TouchableOpacity activeOpacity = { 0.1 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility3 } style = {{justifyContent:'flex-end', marginBottom:5}}>
                        <Image source = { ( this.state.hidePassword3 ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = { styles.btnImage } />
                    </TouchableOpacity>
            </View>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('GantiPassword');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Ganti Kata Sandi</Text>
            </TouchableOpacity>

        </View>

)}}

const styles = StyleSheet.create({

    inputFieldKataSandi: {
        width: 250,
        color: 'black',
        marginTop:20,
        marginBottom:-10,
        },

        btnImage: {
            height: 25,
            width: 25,
            },

        button: {
            width: '75%',
            height: 45,
            padding: 10,
            backgroundColor: '#00BFFF',
            borderRadius: 8,
            marginTop: 50,
            marginBottom: 20,
            alignSelf:'center',
            justifyContent:'center',
            },
                
          buttonText: {
          color: '#fff',
          textAlign: 'center',
          },
    });