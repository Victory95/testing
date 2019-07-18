// import React from 'react'; 

// import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert} from 'react-native';

// import { CustomPicker } from 'react-native-custom-picker'

// export default class spam extends React.Component {
 
//  constructor(props)
//  {
 
//    super(props);
 
//    this.state = { 
 
//    isLoading: true,
 
//    PickerValueHoldername : 'Pilih Nama',
//    PickerValueHolderusername : '',
//    PickerValueHolderemail : ''
 
//   }
//  }
 
//  componentDidMount() {
   
//       return fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((responseJson) => {
//           this.setState({
//             isLoading: false,
//             dataSource: responseJson
//           }, function() {
//             // In this block you can do something with new state.
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }

//     GetPickerSelectedItemValue=()=>{
 
//       Alert.alert(this.state.PickerValueHolder);
 
//     }

//     renderHeaderPenerima() {
//       return (
//         <View style={styles.headerFooterContainer}>
//           <Text style= {{fontSize:18}}>Pilih Penerima</Text>
//         </View>
//       )
//     }
 
//  render() {
 
//    if (this.state.isLoading) {
//      return (
//        <View style={{flex: 1, justifyContent:'center'}}>
//          <ActivityIndicator />
//        </View>
//      );
//    }
 
//    return (
 
//     <View style={styles.MainContainer}>

//  <View style={{flex:1, justifyContent:'flex-start', alignContent:'flex-start'}}>
//           <Picker style={styles.pickerStyle}
//             selectedValue={this.state.PickerValueHoldername}
//             onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHoldername: itemValue})} >
//             { this.state.dataSource.map((item, key)=>(
//             <Picker.Item label={item.name} value={item.name} key={key} />)
//             )}
//           </Picker>
 
//           <Picker
//             selectedValue={this.state.PickerValueHolder}
//             onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolderusername: itemValue})} >
//             { this.state.dataSource.map((item, key)=>(
//             <Picker.Item label={item.username} value={item.username} key={key} />)
//             )}
//           </Picker>

//           <Picker
//             selectedValue={this.state.PickerValueHolder}
//             onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolderemail: itemValue})} >
//             { this.state.dataSource.map((item, key)=>(
//             <Picker.Item label={item.email} value={item.email} key={key} />)
//             )}
//           </Picker>
//           </View>

//     </View>
           
//    );
//  }
// }
 
// const styles = StyleSheet.create({
 
// MainContainer :{
 
// justifyContent: 'center',
// flex:1,
// margin: 10
// },

// pickerStyle :{
 
//   color: '#FFF',
//   backgroundColor:'#00BFFF',
//   borderWidth:1,
//   borderColor:'#000000'
//   }
 
// });