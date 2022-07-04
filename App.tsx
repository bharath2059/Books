import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Homepage from './src/screens/Homepage';

export default function App() {
  return (
    <View style = {styles.container}>
      <Homepage></Homepage>

      
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


