import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HalamanUtama from './Screen/HalamanUtama';
import HalamanLogin from './Screen/HalamanLogin';
import HalamanRegistrasi from './Screen/HalamanRegistrasi';
import DaftarEmail from './Screen/DaftarEmail';
import DaftarOrtu from './Screen/DaftarOrtu';
import LupaKataSandi from './Screen/LupaKataSandi';
import Dashboard from './Screen/Dashboard';
import Pesan from './Screen/Pesan';
import PesanMasuk from './Screen/PesanMasuk'
import KirimPesan from './Screen/KirimPesan';
import PesanTerkirim from './Screen/PesanTerkirim';
import Penilaian from './Screen/Penilaian';
import PenilaianSiswa from './Screen/PenilaianSiswa';
import HalamanProfil from './Screen/HalamanProfil';
import EditProfile from './Screen/EditProfile';
import GantiPassword from './Screen/GantiPassword';
import Agenda from './Screen/Agenda';
import Absensi from './Screen/Absensi';
import spam from './Screen/spam'

const RootStack = createStackNavigator(
  {
    HalamanUtama: {screen: HalamanUtama},
    HalamanLogin: {screen: HalamanLogin},
    HalamanRegistrasi: {screen: HalamanRegistrasi},
    DaftarEmail: {screen: DaftarEmail},
    DaftarOrtu: {screen: DaftarOrtu},
    LupaKataSandi: {screen: LupaKataSandi},
    Dashboard: {screen: Dashboard},
    Pesan: {screen: Pesan},
    PesanMasuk: {screen: PesanMasuk},
    KirimPesan: {screen: KirimPesan},
    PesanTerkirim: {screen: PesanTerkirim},
    Penilaian: {screen: Penilaian},
    PenilaianSiswa: {screen: PenilaianSiswa},
    HalamanProfil: {screen: HalamanProfil},
    EditProfile: {screen: EditProfile},
    GantiPassword: {screen: GantiPassword},
    Agenda: {screen: Agenda},
    Absensi: {screen: Absensi},
    spam: {screen: spam},
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
