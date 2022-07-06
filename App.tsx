import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Searchlist from './src/components/searchlist';

export default function App() {
  return (
    <View style = {styles.container}>
      <Searchlist></Searchlist>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    
  }

})


