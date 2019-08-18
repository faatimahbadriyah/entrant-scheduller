import Peserta from './src/Peserta';
import Kegiatan from './src/Kegiatan';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Peserta: {screen: Peserta},
  Kegiatan: {screen: Kegiatan},
});

const App = createAppContainer(MainNavigator);

export default App;
