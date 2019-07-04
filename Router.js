import { createStackNavigator } from 'react-navigation';

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
import Absensi from './Screen/Absensi';
import spam from './Screen/spam';

const Router = createStackNavigator({
  HalamanUtama: {screen: HalamanUtama },
  HalamanLogin: {screen: HalamanLogin},
  HalamanRegistrasi: {screen: HalamanRegistrasi},
  DaftarEmail: {screen: DaftarEmail},
  DaftarOrtu: {screen: DaftarOrtu},
  LupaKataSandi: {screen: LupaKataSandi},
  Dashboard: {screen: Dashboard},
  Pesan: {screen: Pesan},
  PesanMasuk: {screen: PesanMasuk},
  KirimPesan: {screen: KirimPesan},
  Absensi: {screen: Absensi},
  spam: {screen: spam},
});

export default Router;