import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert} from 'react-native';	

export default class PesanMasuk extends React.Component {
    static navigationOptions = 
  {
    title: 'Pesan Masuk',
    headerStyle:{
      backgroundColor:'#00BFFF',
    },
    headerTitleStyle:{
        color:'white'
    },
    headerTintColor:'white'  
  };

  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Coming Soon');
  };

  render() {
    return (
        <View style={styles.MainContainer}>
            <Text style={{textAlign:'center', fontSize:20}}>
                Coming Soon...!!!
            </Text>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress = {() => {this.props.navigation.navigate('KirimPesan');}}
                style={styles.TouchableOpacityStyle}>
                    <Image
                        //We are making FAB using TouchableOpacity with an image
                        //We are using online image here
                        //source={{uri:'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',}}
                        //You can use you project image Example below
                        source={require('../Asset/image/email.png')}
                        style={styles.FloatingButtonStyle}/>
            </TouchableOpacity>
        </View>

);
}
}

const styles = StyleSheet.create({

    MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    },

    TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    },
 
    FloatingButtonStyle: {
    width: 55,
    height: 55,
    backgroundColor:'#00BFFF',
    borderRadius: 200/2,
    },
});