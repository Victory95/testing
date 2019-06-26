import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class DaftarEmail extends Component {
  static navigationOptions = 
  {
    title: 'Daftar Email',
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
      isChecked:false,
      hidePassword: true,
      hidePassword2:true,
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

render() {
    return (

      <ScrollView style = {{flex:1,backgroundColor:'#fff'}}>
        <View
            behavior="padding"
            style={styles.Wrapper}>
        
        <TextInput
            placeholder='Nama Lengkap'
            underlineColorAndroid='#D3D3D3'
            placeholderTextColor='#C0C0C0'
            keyboardType='email-address'
            style={styles.inputFieldSatu}/>

        <TextInput
            placeholder='Alamat Email'
            underlineColorAndroid='#D3D3D3'
            placeholderTextColor='#C0C0C0'
            keyboardType='email-address'
            style={styles.inputFieldDua}/>

        <TextInput
            placeholder='Nomor Handphone'
            underlineColorAndroid='#D3D3D3'
            placeholderTextColor='#C0C0C0'
            keyboardType='email-address'
            style={styles.inputFieldDua}/>
        <Text style = {styles.textStyle}>
          Pastikan nomor ponsel Anda aktif untuk keamanan dan kemudahan akses
        </Text>

        <View style = {{alignSelf:'center',flexDirection:'row', borderBottomWidth:0.8, borderBottomColor:'#D3D3D3'}}>
        <TextInput
            placeholder='Kata Sandi'
            placeholderTextColor='#C0C0C0'
            secureTextEntry = { this.state.hidePassword }
            style={styles.inputFieldKataSandi}/>

          <TouchableOpacity activeOpacity = { 0.1 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility } style = {{justifyContent:'flex-end', marginBottom:5}}>
            <Image source = { ( this.state.hidePassword ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = { styles.btnImage } />
          </TouchableOpacity>
        </View>
        <Text style = {styles.textStyle}>
          Minimal 6 Karakter
        </Text>

        <View style = {{alignSelf:'center',flexDirection:'row', borderBottomWidth:0.8, borderBottomColor:'#D3D3D3'}}>
        <TextInput
            placeholder='Ulangi Kata Sandi'
            placeholderTextColor='#C0C0C0'
            secureTextEntry = { this.state.hidePassword2 }
            style={styles.inputFieldKataSandi}/>

          <TouchableOpacity activeOpacity = { 0.1 } stylse = { styles.visibilityBtn } onPress = { this.managePasswordVisibility2 } style = {{justifyContent:'flex-end', marginBottom:5}}>
            <Image source = { ( this.state.hidePassword2 ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = { styles.btnImage } />
          </TouchableOpacity>
        </View>

        <View style = {{alignSelf:'center',flexDirection:'row', justifyContent:'flex-end', marginTop:35}}>
            <CheckBox
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                checkBoxColor={'#00BFFF'}
                isChecked={this.state.isChecked}/>

            <Text style = {{color:'#A9A9A9'}}>
                I agree to the ? 
            </Text>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('spam');}} activeOpacity={0.7}>
                <Text style ={{marginLeft:5, fontSize:14, color:'#00BFFF', justifyContent:'center'}}>Term and Conditions </Text>
            </TouchableOpacity>

            <Text style = {{color:'#A9A9A9'}}>
                given 
            </Text>

        </View>

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Buat Akun</Text>
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

    inputFieldSatu: {
      width: 280,
      color: 'black',
      borderColor: '#A9A9A9',
      marginTop: 50,
      marginBottom:-10
      },

    inputFieldDua: {
      width: 280,
      color: 'black',
      borderColor: '#A9A9A9',
      marginTop: 20,
      marginBottom:-10,
      },

    inputFieldKataSandi: {
      width: 255,
      color: 'black',
      marginTop:20,
      marginBottom:-10,
      },

    btnImage: {
      height: 25,
      width: 25,
      },

    textStyle: {
      width: 275,
      color: '#A9A9A9',
      fontSize:11,
      },

    button: {
      width: '80%',
      height: 45,
      padding: 10,
      backgroundColor: '#00BFFF',
      borderRadius: 8,
      marginTop: 50,
      alignItems:'center',
      justifyContent:'center',
      },
         
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      },

    });