//This is an example code for React Native Collapsible Toolbar// 
import React from 'react';
//import react in our code.
import { ScrollView, StyleSheet, View, Animated, Text, Platform, Image, TouchableOpacity} from 'react-native';
//import all the components we are going to use. 
 
const Header_Maximum_Height = 300;
//Max Height of the Header
const Header_Minimum_Height = 50;
//Min Height of the Header
export default class HalamanProfil extends React.Component {
  static navigationOptions = 
  {
    header:null
  };

  constructor() {
    super();
    this.AnimatedHeaderValue = new Animated.Value(0);
  }
  render() {
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: ['#00BFFF', '#00BFFF'],
      extrapolate: 'clamp',
    });
    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: 'clamp',
    });
 
    return (
      <View style={styles.MainContainer}>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: Header_Maximum_Height }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } },
          ])}>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('EditProfile');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Sunting Profile</Text>
          </TouchableOpacity>

          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>
          <Text style={styles.TextViewStyle}>View</Text>

          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('GantiPassword');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Ganti Kata Sandi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => {this.props.navigation.navigate('');}} activeOpacity={0.7} style = {styles.buttonLogout}>
                <Text style ={styles.buttonTextLogout}>Keluar</Text>
          </TouchableOpacity>

        </ScrollView>
        <Animated.View
          style={[
            styles.Header,
            {
              height: AnimateHeaderHeight,
              backgroundColor: AnimateHeaderBackgroundColor,
            },
          ]}>
          <Text style={styles.HeaderInsideText}>
            Nama Siswa
          </Text>
        </Animated.View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },
  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
  },
  HeaderInsideText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  TextViewStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
  ProfilImage: {
    width: 75,
    height: 75,
    borderRadius: 200/2,
    justifyContent:'center',
    alignSelf:'center',
  },

  button: {
    width: '95%',
    height: 45,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth:1,
    borderColor:'#000',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignSelf:'center',
    justifyContent:'center',
    },

    buttonLogout: {
      width: '60%',
      height: 45,
      padding: 10,
      backgroundColor: '#00BFFF',
      borderRadius: 8,
      marginTop: 10,
      marginBottom: 20,
      alignSelf:'center',
      justifyContent:'center',
      },
       
    buttonText: {
      color: '#000',
      textAlign: 'center',
      },

    buttonTextLogout: {
      color: '#fff',
      textAlign: 'center',
      },
});