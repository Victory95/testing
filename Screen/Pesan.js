import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';	

export default class Pesan extends React.Component {
    static navigationOptions = 
  {
    header:null
  };

  render() {
    return (

            <ImageBackground source=
                {require("../Asset/image/background.jpg")}
                style={styles.container}>

                    
                    <View style = {{flex:1, flexDirection:'row', justifyContent:'center', alignContent:'flex-end'}}>

                        <TouchableOpacity style={styles.MenuButton} onPress = {() => {this.props.navigation.navigate('PesanMasuk');}} activeOpacity={0.5}>
                                <Image
                                    source={require("../Asset/image/hide.png")}
                                    style={styles.ImageMenuButton}/> 
                                <Text style={styles.TextMenuButton}> Pesan Masuk </Text>                      
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.MenuButton} onPress = {() => {this.props.navigation.navigate('KirimPesan');}} activeOpacity={0.5}>
                            <Image
                                source={require("../Asset/image/hide.png")}
                                style={styles.ImageMenuButton}/>
                            <Text style={styles.TextMenuButton}> Kirim Pesan </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.MenuButton} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                            <Image
                                source={require("../Asset/image/hide.png")}
                                style={styles.ImageMenuButton}/>
                            <Text style={styles.TextMenuButton}> Pesan Terkirim </Text>
                        </TouchableOpacity>
                        
                    </View>
                    
            </ImageBackground>

);
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },

    MenuButton: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 80,
        width: 80,
        borderRadius: 8,
        margin: 15,
        justifyContent:'center',
        alignSelf:'flex-end',
      },

      ImageMenuButton: {
        padding: 10,
        margin: 5,
        height: 35,
        width: 35,
        alignSelf: 'center',
        color:'#000',
      },

      TextMenuButton: {
        color: '#000',
        alignItems:'center',
        fontSize:12,
        marginTop:10
      },

});
