import React from 'react';
import {Image,Text,TouchableOpacity,View, StyleSheet} from 'react-native';

export default class VolumeKubus extends React.Component 
{
  static navigationOptions = 
  {
    header:null  
  };
 
  render() 
  {
    return (  
  <View style = {{flex:1,backgroundColor:'#fff'}}>
    <View style={{flex:1, alignItems:"center", justifyContent:'flex-start', marginTop:35}}>
      <Image style={{width: 250, height: 250}}
       resizeMode="contain"
       source={{ uri: 'https://brandmark.io/logo-rank/random/bp.png' }}/>

    <View style = {{marginTop:20}}>
    <Text>
      Temukan Sekolahmu Disini
    </Text>
    </View>

    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('HalamanLogin');}} activeOpacity={0.7} style = {styles.button}>
        <Text style ={styles.buttonText}>Masuk</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
        <Text style ={styles.buttonText}>Masuk Sebagai Tamu</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('HalamanRegistrasi');}} activeOpacity={0.7}>
        <Text style ={{fontSize:15, marginTop: 40, color:'#00BFFF', alignItems:'center'}}>Daftar</Text>
    </TouchableOpacity>

    </View>
    
      <Text style = {{color:'#DCDCDC', marginBottom:10, alignSelf:'center',justifyContent:'flex-end'}}>
        2018 Khronos Education System
      </Text>

    </View> 
    );
  }
}

const styles = StyleSheet.create({
 
  MainContainer: {
    
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  button: {
 
    width: '80%',
    height: 45,
    padding: 10,
    backgroundColor: '#00BFFF',
    borderRadius: 8,
    marginTop: 15,
    alignItems:'center',
    justifyContent:'center',
  },
 
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
 
  textStyle: {
 
    color: '#000',
    textAlign: 'center',
    fontSize: 20
 
  }
 
});