import React from 'react';
import {Image,Text,TouchableOpacity,View, StyleSheet, ScrollView, Alert} from 'react-native';
import RNPicker from "rn-modal-picker";

export default class HalamanUtama extends React.Component 
{
    static navigationOptions = 
    {
      header:null  
    };

    constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 1,
          name: "SMA 1 Jakarta"
        },
        {
          id: 2,
          name: "SMA 2 Ambon"
        },
        {
          id: 3,
          name: "SMA 3 Bandung"
        },
        {
          id: 4,
          name: "SMA 4 Yogyakarta"
        },
        {
          id: 5,
          name: "SMA 5 Aceh"
        },
        {
          id: 6,
          name: "SMA 6 Papua"
        },
        {
          id: 7,
          name: "SMA 7 Surabaya"
        },
        {
          id: 8,
          name: "SMA 8 Lampung"
        },
        {
          id: 9,
          name: "SMA 9 Kalimantan"
        },
        {
          id: 10,
          name: "SMA 10 Palembang"
        },
        {
          id: 11,
          name: "SMA 11 Medan"
        },
        {
          id: 12,
          name: "SMA 12 Jambi"
        }
      ],
      placeHolderText: "Pilih Sekolah Anda",
      selectedText: "",
      ErrorStatus : true,
    };
  }
  _selectedValue(index, name) {
    this.setState({ selectedText: name });
  }

  onEnterText = () =>{
    const {selectedText} = this.state;
    if(selectedText == ""){
        this.setState({selectedText : selectedText, ErrorStatus : true}) ;
   }else{
        this.props.navigation.navigate('HalamanLogin');
   }
  }
 
 buttonClickListener = () =>{
       const { selectedText }  = this.state ;
       if (selectedText == ""){
          Alert.alert("Please enter the text to proceed");
       }else{
          this.props.navigation.navigate('HalamanLogin');
       }
   }
 

    render() 
    {
        return (  
        <ScrollView style = {{flex:1,backgroundColor:'#fff'}}>
            <View style={{flex:1, alignItems:"center", justifyContent:'flex-start', marginTop:35}}>
              <Image style={{width: 250, height: 250}}
                    resizeMode="contain"
                    source={{ uri: 'https://brandmark.io/logo-rank/random/bp.png' }}/>

                  <Text style={Styles.textStyle}>
                      Temukan Sekolahmu Disini
                  </Text>
              
                  <RNPicker
                      dataSource={this.state.dataSource}
                      dummyDataSource={this.state.dataSource}
                      defaultValue={false}
                      pickerTitle={"Daftar Nama Sekolah"}
                      showSearchBar={true}
                      disablePicker={false}
                      changeAnimation={"none"}
                      searchBarPlaceHolder={"Pilih Sekolah Anda"}
                      showPickerTitle={true}
                      onChangeText={selectedText=> this.onEnterText(selectedText)}
                      searchBarContainerStyle={this.props.searchBarContainerStyle}
                      pickerStyle={Styles.pickerStyle}
                      selectedLabel={this.state.selectedText}
                      placeHolderLabel={this.state.placeHolderText}
                      selectLabelTextStyle={Styles.selectLabelTextStyle}
                      placeHolderTextStyle={Styles.placeHolderTextStyle}
                      dropDownImageStyle={Styles.dropDownImageStyle}
                      dropDownImage={require("../Asset/image/ic_drop_down.png")}
                      selectedValue={(index, name) => this._selectedValue(index, name)}/>

                      { this.state.ErrorStatus == false ? (
                                  <Text style={styles.errorMessage}>
                                    * Please enter the text to proceed.
                                  </Text>
                                  ) : null  }
              
                  <TouchableOpacity onPress = {this.buttonClickListener}
                      activeOpacity={0.7} style = {Styles.button}>
                      <Text style ={Styles.buttonText}>Selanjutnya</Text>
                  </TouchableOpacity>  
              
              <Text style = {{color:'#DCDCDC', alignSelf:'center',justifyContent:'flex-end', fontSize:12}}>
                  2018 Khronos Education System
              </Text>

              </View>

    </ScrollView> 
     
    );
  }
}

const Styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  MainContainer: {
    
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  button: {
 
    width: '60%',
    height: 45,
    padding: 10,
    backgroundColor: '#00BFFF',
    borderRadius: 8,
    marginTop: 30,
    marginBottom:100,
    alignItems:'center',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent:'center'
  },
 
  textStyle: {
    color: '#C0C0C0',
    textAlign: 'center',
    fontSize: 15,
    marginBottom:30,
    marginTop:40,
  },

  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#C0C0C0",
    padding: 10,
    textAlign: "left",
    width: "95%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },

  pickerStyle: {
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

  errorMessage: {
    fontSize: 20,
    color:"red",
    marginLeft:-80,
  }
 
});