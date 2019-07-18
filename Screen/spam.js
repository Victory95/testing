import React from 'react'; 

import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert, Text, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { selectedButton: null };
      this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  
  selectionOnPress(userType) {
      this.setState({ selectedButton: userType });
  }
  
  render() {
      return (
          <View>
              
              <TouchableOpacity onPress={() => this.selectionOnPress("BASIC")} style={{
                          backgroundColor:
                              this.state.selectedButton === "BASIC"
                                  ? "red"
                                  : "grey"
                      }}
              >
                  <Text
                      
                  >
                      <Text>BASIC</Text>
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                  onPress={() => this.selectionOnPress("INTERMEDIATE")}
              >
                  <Text
                      style={{
                          backgroundColor:
                              this.state.selectedButton === "INTERMEDIATE"
                                  ? "red"
                                  : "grey"
                      }}
                  >
                      <Text>
                          INTERMEDIATE
                      </Text>
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                  onPress={() => this.selectionOnPress("ADVANCED")}
              >
                  <Text
                      style={{
                          backgroundColor:
                              this.state.selectedButton === "ADVANCED"
                                  ? "red"
                                  : "grey"
                      }}
                  >
                      <Text>
                          INTERMEDIATE
                      </Text>
                  </Text>
              </TouchableOpacity>
          </View>
      );
  }
  }