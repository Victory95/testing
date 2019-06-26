import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class HalamanLogin extends Component {
  static navigationOptions = 
  {
    title: 'Pendaftaran',
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
        <View
            behavior="padding"
            style={styles.Wrapper}>
           
            <View style={{alignItems:"center", justifyContent:'flex-start', marginTop:35}}>
            <Image style={{width: 250, height: 100}}
                resizeMode="contain"
                source={{ uri: 'https://brandmark.io/logo-rank/random/bp.png' }}/>
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

        <View style = {{justifyContent:'center', marginTop:20}}>
            <Text>
                =================================================
            </Text>
        </View>

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('DaftarEmail');}}
                           activeOpacity={0.5} style={styles.EmailStyle}>
            <Image
                source={{uri:'https://i.dlpng.com/static/png/3853513_preview.png',}}
                style={styles.ImageIconStyle}/>
                <View style={styles.Separator2Line} />
                <Text style={styles.Text2Style}> Email </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('DaftarOrtu');}}
                activeOpacity={0.5} style={styles.OrangTuaStyle}>
            <Image
                source={{uri:'https://freeiconshop.com/wp-content/uploads/edd/many-people-outline.png',}}
                style={styles.ImageIconStyle}/>
                <View style={styles.Separator2Line} />
                <Text style={styles.Text2Style}> Orangtua </Text>
        </TouchableOpacity>

        <View style = {{alignSelf:'center',flexDirection:'row', justifyContent:'flex-end', position:"absolute", bottom:10}}>
            <Text>
                Sudah Punya Akun ? 
            </Text>
            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('HalamanLogin');}} activeOpacity={0.7}>
                <Text style ={{marginLeft:5, fontSize:14, color:'#00BFFF', justifyContent:'center'}}>Masuk</Text>
            </TouchableOpacity>
        </View>

        </View>

            )}}

    const styles = StyleSheet.create({

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

          EmailStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 0.5,
            borderColor: '#00BFFF',
            height: 50,
            width: '80%',
            borderRadius: 8,
            margin: 5,
            marginTop:35,
            justifyContent:'flex-start',
            alignSelf:'center'
          },
          OrangTuaStyle: {
            flexDirection: 'row',
            alignItems:'center',
            backgroundColor: '#fff',
            borderWidth: 0.5,
            borderColor: '#00BFFF',
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

          Text2Style: {
            color: '#000000',
            marginBottom: 4,
            marginRight: 15,
          },
          Separator2Line: {
            backgroundColor: '#00BFFF',
            width: 1,
            height: 40,
            marginRight:40,
          },
          Wrapper : {
            flex:1,
            alignItems: 'center',
            backgroundColor: '#fff'
            },

        });