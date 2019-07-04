import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';	
import {PagerDotIndicator, IndicatorViewPager} from 'rn-viewpager';

export default class Dashboard extends React.Component {
    static navigationOptions = 
  {
    header:null
  };

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={2} />;
  }

  _toastWithDurationGravityHandler=()=>{
    //function to make Toast With Duration And Gravity
   ToastAndroid.showWithGravity(
      'Coming Soon',
      ToastAndroid.SHORT, //can be SHORT, LONG
      ToastAndroid.TOP, //can be TOP, BOTTON, CENTER
    );
  }
    render() {
        return (
                <ImageBackground source=
                {require("../Asset/image/background.jpg")}
                style={styles.container}>

                    <Image
                        source={{uri: 'https://aboutreact.com/wp-content/uploads/2018/07/logo.png',}}
                        //borderRadius style will help us make the Round Shape Image
                        style={styles.ProfilImage}
                        />
                        <Text style={styles.text}>Nama Siswa</Text>
                    
                        <IndicatorViewPager style={{ height: 325}} indicator={this._renderDotIndicator()}>

                            <View>
                            <View style = {{flexDirection:'row', justifyContent:'center'}}>
                                <TouchableOpacity style={styles.MenuButton} onPress = {() => {this.props.navigation.navigate('Absensi');}} activeOpacity={0.5}>
                                        <Image
                                            source={require("../Asset/image/hide.png")}
                                            style={styles.ImageMenuButton}/>
                                            <Text style={styles.TextMenuButton}> Absensi </Text>
                                    </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.MenuButton} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                                    <Image
                                        source={require("../Asset/image/hide.png")}
                                        style={styles.ImageMenuButton}/>
                                        <Text style={styles.TextMenuButton}> Jadwal Mengajar </Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.MenuButton} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                                    <Image
                                        source={require("../Asset/image/hide.png")}
                                        style={styles.ImageMenuButton}/>
                                        <Text style={styles.TextMenuButton}> Agenda </Text>
                                </TouchableOpacity>
                            </View>

                            <View style = {{flexDirection:'row', justifyContent:'center', marginTop:-20}}>
                                <TouchableOpacity style={styles.MenuButton} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                                        <Image
                                            source={require("../Asset/image/hide.png")}
                                            style={styles.ImageMenuButton}/>
                                            <Text style={styles.TextMenuButton}> Daftar Kegiatan </Text>
                                    </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.MenuButton} onPress = {() => {this.props.navigation.navigate('Pesan');}} activeOpacity={0.5}>
                                    <Image
                                        source={require("../Asset/image/hide.png")}
                                        style={styles.ImageMenuButton}/>
                                        <Text style={styles.TextMenuButton}> Pesan </Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.MenuButton} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                                    <Image
                                        source={require("../Asset/image/hide.png")}
                                        style={styles.ImageMenuButton}/>
                                        <Text style={styles.TextMenuButton}> Penilaian </Text>
                                </TouchableOpacity>
                            </View>
                            </View>  

                            <View style = {{flexDirection:'row', marginTop:170}}>                               
                                <TouchableOpacity style={styles.MenuButton2} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                                    <Image
                                        source={require("../Asset/image/hide.png")}
                                        style={styles.ImageMenuButton}/>
                                        <Text style={styles.TextMenuButton}> Kalender </Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.MenuButton} onPress={this._toastWithDurationGravityHandler} activeOpacity={0.5}>
                                    <Image
                                        source={require("../Asset/image/hide.png")}
                                        style={styles.ImageMenuButton}/>
                                        <Text style={styles.TextMenuButton}> Silabus </Text>
                                </TouchableOpacity>
                            </View>          
                        </IndicatorViewPager>           

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

    text: {
        marginTop: 25,
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        alignSelf:'center',
      },

      ProfilImage: {
        width: 75,
        height: 75,
        borderRadius: 200/2,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:150,
      },

      MenuButton: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 115,
        width: 95,
        borderRadius: 8,
        margin: 5,
        marginTop:35,
        justifyContent:'flex-start',
        alignSelf:'center',
        flexDirection:'column',
      },

      MenuButton2: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 115,
        width: 95,
        borderRadius: 8,
        margin: 5,
        marginTop:35,
        justifyContent:'flex-start',
        alignSelf:'center',
        flexDirection:'column',
        marginLeft:25,
      },

      ImageMenuButton: {
        padding: 10,
        margin: 5,
        height: 35,
        width: 35,
        alignItems: 'center',
        color:'#000',
        marginTop:20
      },

      TextMenuButton: {
        color: '#000',
        alignItems:'center',
        fontSize:12,
        marginTop:10
      },
});