
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet,  Platform, StatusBar  } from 'react-native';
import CreateAdPage from './src/screens/createadpage';
import Homepage from './src/screens/homepage';
import CreateLoginPage from './src/screens/loginpage';
import Search from './src/screens/search';
import Searchlist from './src/screens/searchlist';
import CreateSignupPage from './src/screens/Signuppage';
import Profilepage from './src/screens/profilepage';
import Forgotpass from './src/screens/forgotpass';
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='LoginPage'
      screenOptions={{headerShown : false}}>
        <Stack.Screen name = "LoginPage" component={CreateLoginPage}/>
        <Stack.Screen name = "SignUp" component={CreateSignupPage}/>
        <Stack.Screen name = "Homepage" component={Homepage}/>
        <Stack.Screen name = "Forgotpasspage" component={Forgotpass}/>

      </Stack.Navigator>

    </NavigationContainer>
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
