import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, columns} from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import { Table, Row, Rows } from 'react-native-table-component';

export default class PenilaianSiswa extends React.Component {

  static navigationOptions = 
  {
    title: 'Penilaian',
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
        selectedButton: null,
        penilaian : [
            {
              color:'#000000',
              latihan: 'Latihan Teori',
              value: 1
            },
            {
              color:'#000000',
              latihan: 'Latihan Praktikum',
              value: 2
            },
            {
              color:'#000000',
              latihan: 'Ekstrakulikuler',
              value: 3
            },
            {
              color:'#000000',
              latihan: 'Ulangan Harian',
              value: 4
            },
          ],

          tableHead: ['NIS', 'Nama', 'Nilai'],
          tableData: [
          ['123XXXXX', 'JEFF1', '100'],
          ['123xxxxx', 'JEFF2', '100'],
          ['123xxxxx', 'JEFF3', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
          ['123xxxxx', 'JEFF4', '100'],
        ]
        };

        this.selectionOnPress = this.selectionOnPress.bind(this);
    }

    selectionOnPress(buttonNilai) {
      this.setState({ selectedButton: buttonNilai });
    }

          renderHeaderLatihan() {
            return (
              <View style={styles.headerFooterContainer}>
                <Text style= {{fontSize:18}}>Pilih Daftar Nilai</Text>
              </View>
            )
          }

          renderField(settings) {
            const { selectedItem, defaultText, getLabel, clear } = settings
            return (
              <View style={styles.container}>
                <View>
                  {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
                  {selectedItem && (
                    <View style={styles.innerContainer}>
                      <Text style={[styles.text, { color: selectedItem.color }]}>
                        {getLabel(selectedItem)}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )
          }
        
          renderOption(settings) {
            const { item, getLabel } = settings
            return (
              <View style={styles.optionContainer}>
                <View style={styles.innerContainer}>
                  <Text style={{ color: item.color, alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
                </View>
              </View>
            )
          }
    
      render() {
        const state = this.state;
        return (
              <View style={{flex:1}}> 
                  <View style={styles.mainPicker}>
                      <CustomPicker
                          placeholder={'Pilih Daftar Nilai'}
                          options={this.state.penilaian}
                          getLabel={item => item.latihan}
                          fieldTemplate={this.renderField}
                          optionTemplate={this.renderOption}
                          headerTemplate={this.renderHeaderLatihan}
                          activeOpacity={0.1}
                          />
                  </View>

                  <ScrollView horizontal={true} style={styles.scrollStyle}>
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity  onPress={() => this.selectionOnPress("Button 1")} activeOpacity={0.8} 
                        style = {{
                            width: '20%',
                            height: 37,
                            padding: 10,
                            borderRadius: 8,
                            borderWidth:0.5,
                            borderColor:'#00BFFF',
                            marginLeft:10,
                            marginTop: 10,
                            justifyContent:'center',
                            backgroundColor:
                                    this.state.selectedButton === "Button 1"
                                        ? "#00BFFF"
                                        : "#FFFFFF" }}>
                      <Text style={{
                            color:
                                this.state.selectedButton === "Button 1"
                                    ? "#FFFFFF"
                                    : "#000000",
                            textAlign:'center'
                              }}>Button 1</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => this.selectionOnPress("Button 2")} activeOpacity={0.8}
                    style = {{
                            width: '20%',
                            height: 37,
                            padding: 10,
                            borderRadius: 8,
                            borderWidth:0.5,
                            borderColor:'#00BFFF',
                            marginLeft:10,
                            marginTop: 10,
                            justifyContent:'center',
                            backgroundColor:
                                    this.state.selectedButton === "Button 2"
                                        ? "#00BFFF"
                                        : "#FFFFFF" }}>
                      <Text style={{
                            color:
                                this.state.selectedButton === "Button 2"
                                    ? "#FFFFFF"
                                    : "#000000",
                            textAlign:'center'
                              }}>Button 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.selectionOnPress("Button 3")} activeOpacity={0.8}
                    style = {{
                            width: '20%',
                            height: 37,
                            padding: 10,
                            borderRadius: 8,
                            borderWidth:0.5,
                            borderColor:'#00BFFF',
                            marginLeft:10,
                            marginTop: 10,
                            justifyContent:'center',
                            backgroundColor:
                                    this.state.selectedButton === "Button 3"
                                        ? "#00BFFF"
                                        : "#FFFFFF" }}>
                      <Text style={{
                            color:
                                this.state.selectedButton === "Button 3"
                                    ? "#FFFFFF"
                                    : "#000000",
                            textAlign:'center'
                              }}>Button 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.selectionOnPress("Button 4")} activeOpacity={0.8}
                    style = {{
                            width: '20%',
                            height: 37,
                            padding: 10,
                            borderRadius: 8,
                            borderWidth:0.5,
                            borderColor:'#00BFFF',
                            marginLeft:10,
                            marginTop: 10,
                            justifyContent:'center',
                            backgroundColor:
                                    this.state.selectedButton === "Button 4"
                                        ? "#00BFFF"
                                        : "#FFFFFF" }}>
                      <Text style={{
                            color:
                                this.state.selectedButton === "Button 4"
                                    ? "#FFFFFF"
                                    : "#000000",
                            textAlign:'center'
                              }}>Button 4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.selectionOnPress("Button 5")} activeOpacity={0.8}
                    style = {{
                            width: '20%',
                            height: 37,
                            padding: 10,
                            borderRadius: 8,
                            borderWidth:0.5,
                            borderColor:'#00BFFF',
                            marginLeft:10,
                            marginTop: 10,
                            justifyContent:'center',
                            backgroundColor:
                                    this.state.selectedButton === "Button 5"
                                        ? "#00BFFF"
                                        : "#FFFFFF" }}>
                      <Text style={{
                            color:
                                this.state.selectedButton === "Button 5"
                                    ? "#FFFFFF"
                                    : "#000000", 
                            textAlign:'center'
                              }}>Button 5</Text>
                    </TouchableOpacity>
                  </View>
                  </ScrollView>

                <ScrollView style={styles.containerTabel}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C0C0C0'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.textTabel}/>
                        <Rows data={state.tableData} textStyle={styles.textContent}/>
                    </Table>
                </ScrollView>
            </View>

)
}
}

const styles = StyleSheet.create({
    container: {
      borderColor: '#00BFFF',
      borderWidth: 10,
      padding: 5,
        color:'#fff'
    },

    headerFooterContainer: {
        padding: 10,
        alignItems: 'center'
      },

      text: {
        fontSize: 15
      },

      innerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
      },

      optionContainer: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
      },

      mainPicker: {
        width:'100%',
        alignSelf:'center',
      },

      button: {
        width: '20%',
        height: 37,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth:0.5,
        borderColor:'#00BFFF',
        marginLeft:10,
        marginRight:10,
        marginTop: 10,
        alignSelf:'center'
        },

        scrollStyle: {
          width:'100%',
          height:50,

        },

      buttonText: {
          color: '#000',
          textAlign: 'center',
          },

      containerTabel: { 
        flex: 1, 
        padding: 16,
        backgroundColor: '#fff',
        width:'109%',
        alignSelf:'center',
        alignContent:'flex-start'
      },

      head: { 
        height: 40, 
        backgroundColor: '#00BFFF' 
      },

      textTabel: { 
        margin: 6 ,
        color:'#FFF',
        textAlign:'center'
      },

      textContent: { 
        margin: 6 ,
        color:'#000',
        textAlign:'center'
      }
})