import React from 'react';
import {Image,Text,TouchableOpacity,View, StyleSheet, ScrollView, Alert} from 'react-native';
import RNPicker from "rn-modal-picker";
import KESStyles from "../Asset/styles/Styles"

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
              Alert.alert("Silahkan Pilih Sekolah Terlebih Dahulu");
          }else{
              this.props.navigation.navigate('HalamanLogin');
          }
        }
 

    render() {
        return (  
            <ScrollView style = {KESStyles.halamanUtama.scrollView}>
                <View style={KESStyles.halamanUtama.scrollContainer}>
                    <Image style={KESStyles.halamanUtama.imageCointainer}
                        resizeMode="contain"
                        source={require("../Asset/image/gkes.png")}
                        />
                    <Text style={KESStyles.halamanUtama.textContainer}>
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
                        pickerStyle={KESStyles.halamanUtama.pickerContainer}
                        selectedLabel={this.state.selectedText}
                        placeHolderLabel={this.state.placeHolderText}
                        selectLabelTextStyle={KESStyles.halamanUtama.selectLabelText}
                        placeHolderTextStyle={KESStyles.halamanUtama.placeHolderText}
                        dropDownImageStyle={KESStyles.halamanUtama.dropdownContainer}
                        dropDownImage={require("../Asset/image/ic_drop_down.png")}
                        selectedValue={(index, name) => this._selectedValue(index, name)}
                        />
                          { this.state.ErrorStatus == false ? (
                                      <Text style={KESStyles.halamanUtama.errorMessage}>
                                        Pilih Sekolah Terlebih Dahulu
                                      </Text>
                                      ) : null  }
                  
                    <TouchableOpacity onPress = {this.buttonClickListener}
                        activeOpacity={0.7} style = {KESStyles.halamanUtama.buttonContainer}>
                            <Text style ={KESStyles.halamanUtama.buttonTextContaier}>
                              Selanjutnya
                            </Text>
                    </TouchableOpacity>  
                  
                    <Text style = {KESStyles.halamanUtama.copyrightText}>
                        2018 Khronos Education System
                    </Text>

                  </View>

            </ScrollView> 
     
    );
  }
}