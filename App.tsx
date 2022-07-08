import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import CreateAdPage from './src/screens/createadpage';

import Homepage from './src/screens/homepage';
import Forgotpass from './src/screens/Forgotpass';
import Profilepage from './src/screens/Profilepage';



export default function App() {
  return (
    <SafeAreaView style =  {styles.AndroidSafeArea}>
     
      
    
      
      <Profilepage/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    //justifyContent : 'center',
    //alignItems : 'center',
    
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }

})
