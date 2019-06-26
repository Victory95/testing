import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HalamanUtama from './Screen/HalamanUtama';
import HalamanLogin from './Screen/HalamanLogin';
import HalamanRegistrasi from './Screen/HalamanRegistrasi';
import DaftarEmail from './Screen/DaftarEmail';
import DaftarOrtu from './Screen/DaftarOrtu';
import LupaKataSandi from './Screen/LupaKataSandi';


const RootStack = createStackNavigator(
  {
    HalamanUtama: {screen: HalamanUtama},
    HalamanLogin: {screen: HalamanLogin},
    HalamanRegistrasi: {screen: HalamanRegistrasi},
    DaftarEmail: {screen: DaftarEmail},
    DaftarOrtu: {screen: DaftarOrtu},
    LupaKataSandi: {screen: LupaKataSandi},
    
    },
    {
      initialRouteName: 'HalamanUtama',
    }
  );

  
  
  const Router = createAppContainer(RootStack);
  
  export default class App extends React.Component {
    render() {
      return <Router />;
    }
 
  }
