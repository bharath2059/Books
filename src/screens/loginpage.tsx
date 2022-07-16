import { useNavigation } from "@react-navigation/native";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { useState } from "react";

import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


const CreateLoginPage = ({navigation}) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    return (
        <SafeAreaView style={styles.Wrapper}>
            
            <Image source={require('./../Assets/logo.jpeg')} style={styles.imageStyle} />
            <View style={styles.box1}>
                <Text style={styles.HeadingText}>Login</Text>
                <View style = {styles.i}>
                <View style={styles.textInputStyle}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setEmail}
                        value={Email}
                        placeholder='Enter your Emailid' />
                </View>

                <View style={styles.textInputStyle1}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setPassword}
                        value={Password}
                        placeholder='Enter your Password' />
                </View>
                </View>
                <TouchableOpacity style={styles.buttonStyle} onPress ={()=>{navigation.push('Homepage')}}>
                    <Text style={styles.buttonTextStyle}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.link} onPress ={()=>{navigation.push('SignUp')}}>Don't have an account?</Text>
                <Text style={styles.link1} onPress ={()=>{navigation.push('Forgotpasspage')}}>Forgot Pasword?</Text>
            </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        alignItems : "center",
        paddingTop:170,

        

        backgroundColor: '#E8E8FF',
    },
    HeadingText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop : 40
    },
    i : {
        alignItems : "center"
    },


    
    imageStyle: {
        height: 200,
        width: "30%",
       // left: 105,
        //bottom: 40,
        alignItems:'center',
        position : 'relative',
        top : 30
    },


    box1: {
        flex: 3,
        width : "100%"
    },



    link:{
        marginTop:40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#0b780e',
    },
    link1:{
        marginTop:10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#0b780e',
    },
   

    textInputStyle: {
        height: 40,
        width: "70%",
        backgroundColor: '#D9D9D9',
        marginBottom: 0,

        marginTop:30,
        

       // marginLeft:80,
        borderRadius:10

    },
    textInputStyle1: {
        height: 40,
        width: "70%",
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:30,
       // marginLeft:80,
        borderRadius:10

    },
    InputTextStyle: {
        position: 'relative',
        top: 5,
        fontSize: 18,
        marginLeft: 5,

    },
    buttonStyle: {
        backgroundColor: '#F97777',
        height: 45,
        width: 200,
        marginBottom: 20,
       // marginLeft:165,
        borderRadius:10,
        marginTop:60,
        alignSelf : 'center',
        justifyContent : 'center'

    },
    buttonTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        position: 'relative',
        

    },
},
)

export default CreateLoginPage;