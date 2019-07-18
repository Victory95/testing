import {StyleSheet, Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

let halamanUtama = StyleSheet.create({
      scrollView : {
          flex:1,
          backgroundColor:'#fff'
      },
      scrollContainer : {
          flex:1, 
          alignItems:"center", 
          justifyContent:'flex-start', 
          marginTop:35
      },
      imageCointainer : {
          width: 250, 
          height: 250
      },
      textContainer : {
          color: '#C0C0C0',
          textAlign: 'center',
          fontSize: 15,
          marginBottom:30,
          marginTop:40,
      },
      pickerContainer : {
          marginLeft: 18,
          elevation:3,
          paddingRight: 25,
          marginRight: 10,
          marginBottom: 2,
          borderWidth:1,
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: 5,
          flexDirection: "row"
      },
      selectLabelText : {
          color: "#000",
          textAlign: "left",
          width: "99%",
          padding: 10,
          flexDirection: "row"
      },
      placeHolderText : {
          color: "#C0C0C0",
          padding: 10,
          textAlign: "left",
          width: "95%",
          flexDirection: "row"
      },
      dropdownContainer : {
          marginLeft: 10,
          width: 10,
          height: 10,
          alignSelf: "center"
      },
      errorMessage : {
          fontSize: 20,
          color:"red",
          marginLeft:-80,
      },
      buttonContainer : {
          width: '60%',
          height: 45,
          padding: 10,
          backgroundColor: '#00BFFF',
          borderRadius: 8,
          marginTop: 30,
          marginBottom:100,
          alignItems:'center',
      },
      buttonTextContaier : {
          color: '#fff',
          textAlign: 'center',
          justifyContent:'center'
      },
      copyrightText : {
          color:'#DCDCDC', 
          alignSelf:'center',
          justifyContent:'flex-end', 
          fontSize:12
      },
      searchBarContainer : {
          marginBottom: 10,
          flexDirection: "row",
          height: 40,
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: 10,
          elevation: 3,
          marginLeft: 10,
          marginRight: 10
      }
  }
)

let halamanLogin = StyleSheet.create({
      wrapperContainer : {
          flex:1,
          alignItems: 'center',
          backgroundColor: '#fff',
        },
      mainContainer : {
          alignItems:"center", 
          justifyContent:'flex-start', 
          marginTop:35
        },
      imageCointainer : {
          width: 325, 
          height: 175
      },
      inputFieldEmail : {
          width: 280,
          color: 'black',
          borderColor: '#A9A9A9',
          marginTop: 50,
      },
      passwordFieldContainer : {
          alignSelf:'center',
          flexDirection:'row', 
          borderBottomWidth:0.8, 
          borderBottomColor:'#D3D3D3'
      },
      inputFieldKataSandi : {
          width: 255,
          color: 'black',
          marginTop:20,
          marginBottom:-10,
      },
      hiddenButtonPassword : {
          justifyContent:'flex-end', 
          marginBottom:5
      },
      hiddenButtonImage : {
          height: 25,
          width: 25,
      },
      forgotPasswordText : {
          fontSize:13, 
          marginTop: 25, 
          color:'#00BFFF', 
          marginLeft:180
      },
      loginButton : {
          width: '80%',
          height: 45,
          padding: 10,
          backgroundColor: '#00BFFF',
          borderRadius: 8,
          marginTop: 25,
          alignItems:'center',
          justifyContent:'center',
      },
      loginButtonText : {
          color: '#fff',
          textAlign: 'center',
      }
  }
)


      


  const KESStyles = {
      halamanUtama,
      halamanLogin
      }

export default KESStyles;

