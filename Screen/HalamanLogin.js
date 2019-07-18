import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import KESStyles from "../Asset/styles/Styles"

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
        loginData : {
            email     :'',
            password  :'',
        },
        isLoading : false,
        isSuccessFull : false,
        hidePassword: true,
        ToastData : {
          show      : false,
          message   : "",
          size      : "",
          position  : ""
      }
    }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    managePasswordVisibility = () => {
      this.setState({ hidePassword: !this.state.hidePassword });
    }

    handleValidateEmail = (email) => {
      var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return email_regex.test(email);
    }

    handleEmailChange = (input) => {
      let loginData = {...this.state.loginData};
      loginData.username = input;
      this.setState({
          loginData : loginData
      })
    } 
    
    handlePasswordChange = (input) => {
      let loginData = {...this.state.loginData};
      loginData.password = input;
      this.setState({
          loginData : loginData
      })
    }

    // handleLogin = () => {
    //   let loginData = {...this.state.loginData};
    //   let noValue = false;
    //   for(let key in loginData){
    //       if(loginData[key] === ""){
    //           noValue = true
    //       }
    //   }
    //   if(noValue){
    //       this.refs.toast.show("Silahkan Masukkan Email dan Password");
    //   } else {
    //       this.setState({
    //           isLoading : true,
    //       }, () => {
    //         this.props.navigation.navigate('Dashboard');
              // login user dengan REST API
              // API.userLogin(loginData)
              // .then((result) => {
              //     if(result.status){
              //         let user_data = result.data;
              //         AsyncStorage.setItem('loginData', JSON.stringify(user_data));
              //         this.props.globalAction({
              //             type : "USER_LOGIN",
              //             data : user_data
              //         })
              //         this.setState({
              //             isLoading : false,
              //         }, () => {
              //             setTimeout(() => {
              //                 this.refs.toast.show(result.message)
              //                 setTimeout(() => {
              //                     this.props.navigation.navigate('BannerScreen');
              //                 }, 300)
              //             },300)
              //         })
              //     } else {
              //         this.setState({
              //             isLoading : false
              //         }, () => {
              //             setTimeout(() => {
              //                 this.refs.toast.show(result.message);
              //             },300)
              //         })
              //     }
              // })
  //         })
  //     }
  // }

  componentDidMount(){
         
  }

render() {
    return (

        <ScrollView>
            <View
                behavior="padding"
                style={KESStyles.halamanLogin.wrapperContainer}>

                <View style={KESStyles.halamanLogin.mainContainer}>
                    <Image style={KESStyles.halamanLogin.imageCointainer}
                        resizeMode="contain"
                        source={require("../Asset/image/gkes.png")}/>
                </View>
            
                <TextInput
                    onChangeText={this.handleEmailChange}
                    placeholder='E-Mail'
                    underlineColorAndroid='#D3D3D3'
                    returnKeyType={'next'}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    placeholderTextColor='#C0C0C0'
                    keyboardType='email-address'
                    style={KESStyles.halamanLogin.inputFieldEmail}
                />
                <View style = {KESStyles.halamanLogin.passwordFieldContainer}>
                    <TextInput
                        ref={(input) => { this.secondTextInput = input; }}
                        onChangeText={this.handlePasswordChange}
                        placeholder='Kata Sandi'
                        placeholderTextColor='#C0C0C0'
                        returnKeyType='go'
                        secureTextEntry = {this.state.hidePassword}
                        style={KESStyles.halamanLogin.inputFieldKataSandi}
                    />
                    <TouchableOpacity activeOpacity = { 0.8 } onPress = { this.managePasswordVisibility } style = {KESStyles.halamanLogin.hiddenButtonPassword}>
                        <Image source = { ( this.state.hidePassword ) ? require('../Asset/image/hide.png') : require('../Asset/image/view.png') } style = {KESStyles.halamanLogin.hiddenButtonImage}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress = {() => {this.props.navigation.navigate('spam');}} activeOpacity={0.7}>
                    <Text style ={KESStyles.halamanLogin.forgotPasswordText}>Lupa Kata Sandi?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress = {() => {this.props.navigation.navigate('Dashboard');}} activeOpacity={0.7} style = {KESStyles.halamanLogin.loginButton}>
                    <Text style ={KESStyles.halamanLogin.loginButtonText}>Masuk</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
      )
    }
  }
 
    