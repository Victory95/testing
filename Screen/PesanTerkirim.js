import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PesanTerkirim extends React.Component {

  static navigationOptions = 
  {
    title: 'Pesan Terikirim',
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
        <View>
            <Text>
                Coming Soon
            </Text>
        </View>

        )
  }
}