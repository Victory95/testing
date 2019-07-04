import React from 'react'
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
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

  render() {
    const options = [
      {
        color:'#000000',
        label: 'Orang Tua',
        value: 1
      },
      {
        color:'#000000',
        label: 'Siswa dan Orang Tua',
        value: 2
      },
      {
        color:'#000000',
        label: 'Kepala Sekolah',
        value: 3
      },
      {
        color:'#000000',
        label: 'Wakil Kepala Sekolah',
        value: 4
      },
      {
        color:'#000000',
        label: 'Admin',
        value: 5
      }
    ]
    return (
      <View style={styles.mainPicker}>
        <CustomPicker
          placeholder={'Pilih Penerima'}
          options={options}
          getLabel={item => item.label}
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
        <Text>Pilih Penerima</Text>
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
              <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{ color: '#fff' }}>Clear</Text>
              </TouchableOpacity>
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
    padding: 15
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

  clearButton: { 
    backgroundColor:'grey',
    borderRadius:5,
    marginLeft:50
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
