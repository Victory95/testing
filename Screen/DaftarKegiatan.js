import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class DaftarEmail extends Component {
  static navigationOptions = 
  {
    title: 'Daftar Kegiatan',
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
        <View style={styles.Wrapper}>
            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Absensi');}} activeOpacity={0.8} style = {styles.button}>
                <Text style ={styles.buttonText}>Masukkan Absensi untuk pelajaran Pendidikan Agama</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Masukkan Nilai Ujian Akhir Semester untuk mata pelajaran Pendidikan Agamapada kelas XI.A</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Masukkan Nilai Ujian Akhir Semester untuk mata pelajaran Pendidikan Agama pada kelas XI.B </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Masukkan Nilai Ujian Akhir Semester untuk mata pelajaran Pendidikan Agama pada kelas XI.c</Text>
            </TouchableOpacity>
        </View>

        )}}

        const styles = StyleSheet.create({
        Wrapper : {
          flex:1,
          alignItems: 'center',
          backgroundColor: '#fff',
          },

        button: {
          width: '99%',
          height: 45,
          padding: 10,
          borderWidth:1,
          borderColor:'#D3D3D3',
          backgroundColor: '#FFF',
          borderRadius: 8,
          marginTop: 5,
          alignItems:'center',
          justifyContent:'center',
          },
             
        buttonText: {
          color: '#808080',
          textAlign: 'center',
          },

        });