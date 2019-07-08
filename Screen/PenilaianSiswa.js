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
        };
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
        return (
            <View>
                <View style={styles.mainPicker}>
                <CustomPicker
                    placeholder={'Pilih Daftar Nilai'}
                    options={this.state.penilaian}
                    getLabel={item => item.latihan}
                    fieldTemplate={this.renderField}
                    optionTemplate={this.renderOption}
                    headerTemplate={this.renderHeaderLatihan}
                    />
                    </View>
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

})