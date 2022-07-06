
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import CreateAdPage from './src/screens/createadpage';



export default function App() {
  return (
    <SafeAreaView style =  {styles.AndroidSafeArea}>
     
      <CreateAdPage></CreateAdPage>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Safe Area View for Andriod.
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }

})




import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import Search from './src/components/search';



export default function App() {
  return (
    <SafeAreaView style =  {styles.AndroidSafeArea}>
     
      <Search></Search>

      
    </SafeAreaView>
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
  // Safe Area View for Andriod.
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    
  }

})
