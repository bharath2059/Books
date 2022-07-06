
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import Search from './src/components/search';



export default function App() {
  return (
    <SafeAreaView style =  {styles.AndroidSafeArea}>
     
      <Search></Search>

      
    </SafeAreaView>
  )}

const styles = StyleSheet.create({
  // Safe Area View for Andriod.
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  

}
}
)
