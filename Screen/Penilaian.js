import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export default class Penilaian extends React.Component {

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
        kelas : [
            {
              color:'#000000',
              kelas: 'X.A',
              value: 1
            },
            {
              color:'#000000',
              kelas: 'X.B',
              value: 2
            },
            {
              color:'#000000',
              kelas: 'X.C',
              value: 3
            },
            {
              color:'#000000',
              kelas: 'XI.A',
              value: 4
            },
            {
              color:'#000000',
              kelas: 'XI.B',
              value: 5
            },
          ],

          mapel : [
            {
              color:'#000000',
              mapel: 'Ilmu Seribu Bayang',
              value: 1
            },
            {
              color:'#000000',
              mapel: 'Ilmu Berubah Wujud',
              value: 2
            },
            {
              color:'#000000',
              mapel: 'Ilmu Menghilang',
              value: 3
            },
            {
              color:'#000000',
              mapel: 'Ilmu Berjalan di Air',
              value: 4
            },
            {
              color:'#000000',
              mapel: 'Ilmu Tenaga Dalam',
              value: 5
            },
          ],
        };
    }

    renderHeaderKelas() {
        return (
          <View style={styles.headerFooterContainer}>
            <Text style= {{fontSize:18}}>Pilih Kelas</Text>
          </View>
        )
      }

      renderHeaderMapel() {
        return (
          <View style={styles.headerFooterContainer}>
            <Text style= {{fontSize:18}}>Pilih Mata Pelajaran</Text>
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
    return (
        <View style={styles.Wrapper}>
            <View style={{alignItems:"center", justifyContent:'flex-start', marginTop:35}}>
                <Image style={{width: 325, height: 175}}
                    resizeMode="contain"
                    source={{ uri: 'https://brandmark.io/logo-rank/random/bp.png' }}/>
            </View>

            <View style={styles.mainPicker}>
                <CustomPicker style={{marginTop:15}}
                    placeholder={'Pilih Kelas'}
                    options={this.state.kelas}
                    getLabel={item => item.kelas}
                    fieldTemplate={this.renderField}
                    optionTemplate={this.renderOption}
                    headerTemplate={this.renderHeaderKelas}
                    />
                <CustomPicker style={{marginTop:15}}
                    placeholder={'Pilih Mata Pelajaran'}
                    options={this.state.mapel}
                    getLabel={item => item.mapel}
                    fieldTemplate={this.renderField}
                    optionTemplate={this.renderOption}
                    headerTemplate={this.renderHeaderMapel}
                    />
            </View>

            <TouchableOpacity onPress = {() => {this.props.navigation.navigate('PenilaianSiswa');}} activeOpacity={0.7} style = {styles.button}>
                <Text style ={styles.buttonText}>Lihat Nilai Latihan dan Tugas Kelas</Text>
            </TouchableOpacity>
        </View>

        )
  }
}

const styles = StyleSheet.create({
    container: {
      borderColor: '#00BFFF',
      borderWidth: 1,
      padding: 5
    },
  
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'stretch'
    },
  
    mainPicker: {
      width:'95%',
      alignSelf:'center'
    },
  
    text: {
      fontSize: 15
    },
  
    headerFooterContainer: {
      padding: 10,
      alignItems: 'center'
    },
  
    optionContainer: {
      padding: 10,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    },
  
    optionInnerContainer: {
      flex: 1,
      flexDirection: 'row'
    },

    button: {
        width: '80%',
        height: 45,
        padding: 10,
        backgroundColor: '#00BFFF',
        borderRadius: 8,
        marginTop: 25,
        justifyContent:'center',
        },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        },

    Wrapper : {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
        },

})