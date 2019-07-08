import React, { Component } from 'react';
import {ButtonGroup} from 'react-native-elements';
import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';


export default class EditProfile extends Component {
  static navigationOptions = 
  {
    title: 'Edit Profile',
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
      selectedIndex: 0,
      isChecked:false,
      userType:0,
      radio_props: [{label: 'Pria', value: 0}, {label: 'Wanita', value: 1}],
      value3Index: 0,
      parent:false,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    if (selectedIndex==2){
      this.setState({parent:true})
    }else {
      this.setState({parent:false})
    }
    this.setState({selectedIndex})

  }

  onPress = (value, index) => {
    this.setState({
      value3: value,
      value3Index: index
    })
    }

  onChangeRadio  = (userType) => {
    if(this.state.dataTogel.length == 0){
        this.setState({userType:userType})
    }else{
      this.setState({userType:userType})
      this.onSubmit();
    }
  }

render() {

    const buttons = ['Pria', 'Wanita', 'Wali']
    const { selectedIndex } = this.state;
    
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
            style={styles.inputFieldDua}/>

        <TextInput
            placeholder='Alamat Email'
            underlineColorAndroid='#D3D3D3'
            placeholderTextColor='#C0C0C0'
            keyboardType='email-address'
            style={styles.inputFieldDua}/>

        <TextInput
            placeholder='Tanggal Lahir'
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

          <TextInput
            placeholder='Alamat'
            underlineColorAndroid='#D3D3D3'
            placeholderTextColor='#C0C0C0'
            keyboardType='email-address'
            style={styles.inputFieldDua}/>

          <Text style = {{alignSelf:'flex-start', marginTop:35, marginLeft:45, color:'#C0C0C0'}}>
            Jenis Kelamin
          </Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor:'#00BFFF'}}
            containerStyle={{height: 40, width:220, alignSelf:'flex-start', marginTop:5, marginLeft:45 }}/>
            {this.state.parent===true ? 
              <View style = {styles.ViewRadioButton}>
          <RadioForm formHorizontal={true} animation={true} >
            {this.state.radio_props.map((obj, i) => {
              
              var onPress = (value, index) => {
                  this.setState({
                    userType: value,
                    value3Index: index
                  })
                }
              return (
                <RadioButton labelHorizontal={true} key={i} >
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.value3Index === i}
                    onPress={onPress}
                    buttonInnerColor={'#00BFFF'}
                    buttonOuterColor={this.state.value3Index === i ? '#00BFFF' : '#7f8c8d'}
                    buttonSize={14}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    onPress={onPress}
                    labelStyle={{ color: '#7f8c8d',marginLeft: 10, marginRight: 50}}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              )
            })}
          </RadioForm>
          </View>
            : 
              null
            }

        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Ubah Profile</Text>
        </TouchableOpacity>

        </View>
      </ScrollView>
            )}}

            let deviceWidth     = Dimensions.get('window').width;
            let deviceHeight    = Dimensions.get('window').height;

  const styles = StyleSheet.create({

    Wrapper : {
      flex:1,
      alignItems: 'center',
      backgroundColor: '#fff',
      },

    inputFieldSatu: {
      width: 270,
      color: 'black',
      borderColor: '#A9A9A9',
      marginTop: 50,
      marginBottom:-10,
      },

    inputFieldDua: {
      width: 270,
      color: 'black',
      borderColor: '#A9A9A9',
      marginTop:20,
      marginBottom:-10,
      },

    inputFieldKataSandi: {
      width: 250,
      color: 'black',
      marginTop:20,
      marginBottom:-10,
      },

    textStyle: {
      width: 270,
      color: '#A9A9A9',
      fontSize:11,
      },

    btnImage: {
      height: 25,
      width: 25,
      },

    button: {
      width: '80%',
      height: 45,
      padding: 10,
      backgroundColor: '#00BFFF',
      borderRadius: 8,
      marginTop: 50,
      marginBottom: 20,
      alignItems:'center',
      justifyContent:'center',
      },
         
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      },

      ViewRadioButton: {
        width: deviceWidth*0.9,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft:45,
      },

    });