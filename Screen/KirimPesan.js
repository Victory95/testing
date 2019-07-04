import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export default class spam extends React.Component {

  static navigationOptions = 
  {
    title: 'Tulis Pesan',
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
        visibleKelas: false,
        visibleMurid: false,
        visibleMapel: false,
        penerima : [
            {
              color:'#000000',
              penerima: 'Orang Tua',
              value: 1
            },
            {
              color:'#000000',
              penerima: 'Siswa dan Orang Tua',
              value: 2
            },
            {
              color:'#000000',
              penerima: 'Kepala Sekolah',
              value: 3
            },
            {
              color:'#000000',
              penerima: 'Wakil Kepala Sekolah',
              value: 4
            },
            {
              color:'#000000',
              penerima: 'Admin',
              value: 5
            },
          ],

          kelas = [
            {
              color:'#000000',
              kelas:'X.A',
              value: 1
            },
            {
              color:'#000000',
              kelas:'X.B',
              value: 2
            },
            {
              color:'#000000',
              kelas:'X.C',
              value: 3
            },
            {
              color:'#000000',
              kelas:'XI.A',
              value: 4
            },
            {
              color:'#000000',
              kelas:'XI.B',
              value: 5
            },
            {
              color:'#000000',
              kelas:'XI.C',
              value: 6
            },
            {
              color:'#000000',
              kelas:'XII.A',
              value: 7
            },
            {
              color:'#000000',
              kelas:'XII.B',
              value: 8
            },
            {
              color:'#000000',
              kelas:'XII.C',
              value: 9
            }
          ],

          murid = [
            {
              color:'#000000',
              murid:'murid 1',
              value: 1
            },
            {
              color:'#000000',
              murid:'murid 2',
              value: 2
            },
            {
              color:'#000000',
              murid:'murid 3',
              value: 3
            },
            {
              color:'#000000',
              murid:'murid 4',
              value: 4
            },
            {
              color:'#000000',
              murid:'murid 5',
              value: 5
            },
            {
              color:'#000000',
              murid:'murid 6',
              value: 6
            },
            {
              color:'#000000',
              murid:'murid 7',
              value: 7
            },
            {
              color:'#000000',
              murid:'murid 8',
              value: 8
            },
            {
              color:'#000000',
              murid:'murid 9',
              value: 9
            }
          ],

          mapel = [
            {
              color:'#000000',
              mapel:'Ilmu Hitam',
              value: 1
            },
            {
              color:'#000000',
              mapel:'Ilmu Sihir',
              value: 2
            },
            {
              color:'#000000',
              mapel:'Ilmu Pengetahuan',
              value: 3
            },
            {
              color:'#000000',
              mapel:'Ilmu Pencabut Nyawa',
              value: 4
            },
            {
              color:'#000000',
              mapel:'Ilmu Pembajakan',
              value: 5
            },
            {
              color:'#000000',
              mapel:'Ilmu Menghilang',
              value: 6
            },
            {
              color:'#000000',
              mapel:'Ilmu Kame kameha',
              value: 7
            },
            {
              color:'#000000',
              mapel:'Ilmu Seribu Bayang',
              value: 8
            },
            {
              color:'#000000',
              mapel:'Ilmu Berubah Wujud',
              value: 9
            }
          ]
    };
}
    renderDropdown(){
        if(this.state.visibleKelas === true){
            return(
                <CustomPicker style={{marginTop:15}}
                    placeholder={'Pilih Kelas'}
                    options={this.state.kelas}
                    getLabel={item => item.kelas}
                    fieldTemplate={this.renderField}
                    optionTemplate={this.renderOption}
                    headerTemplate={this.renderHeader}
                    />
            )
        }else if(this.state.visibleMurid === true){
                return(
                    <CustomPicker style={{marginTop:15}}
                        placeholder={'Pilih Murid'}
                        options={this.state.murid}
                        getLabel={item => item.murid}
                        fieldTemplate={this.renderField}
                        optionTemplate={this.renderOption}
                        headerTemplate={this.renderHeader}
                        />
                )
        }else if(this.state.visibleMurid === true){
            return(
                <CustomPicker style={{marginTop:15}}
                    placeholder={'Pilih Mata Pelajaran'}
                    options={mapel}
                    getLabel={item => item.mapel}
                    fieldTemplate={this.renderField}
                    optionTemplate={this.renderOption}
                    headerTemplate={this.renderHeader}
                />
            )
        }else{
            return(
                <></>
            )
        }
    }

  render() {
    return (
      <View style={styles.mainPicker}>
        <CustomPicker
          placeholder={'Pilih Penerima'}
          options={this.state.penerima}
          getLabel={item => item.penerima}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
        />
        <CustomPicker style={{marginTop:15}}
          placeholder={'Pilih Kelas'}
          options={this.state.kelas}
          getLabel={item => item.kelas}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
        />
        <CustomPicker style={{marginTop:15}}
          placeholder={'Pilih Murid'}
          options={this.state.murid}
          getLabel={item => item.murid}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
        />
        <CustomPicker style={{marginTop:15}}
          placeholder={'Pilih Mata Pelajaran'}
          options={this.state.mapel}
          getLabel={item => item.mapel}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
        />
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text style= {{fontSize:18}}>Pilih Penerima</Text>
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
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },

  mainPicker: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    width:'95%', 
    alignSelf:'center', 
    marginTop:15,
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

  box: {
    width: 20,
    height: 20,
    marginRight: 10
  }
})
