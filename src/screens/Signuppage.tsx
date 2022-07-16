import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const CreateSignupPage = ({navigation}) => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setconPassword] = useState('')
    return (
        <SafeAreaView style={styles.Wrapper}>
            <View style={styles.box1}>
            <Image source={require('./../Assets/logo.jpeg')} style={styles.imageStyle} />
                <Text style={styles.HeadingText}>SignUp</Text>
               
                <View style={styles.textInputStyle}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setName}
                        value={Name}
                        placeholder='Name' />
                </View>
                
                <View style={styles.textInputStyle}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setEmail}
                        value={Email}
                        placeholder='Emailid' />
                </View>

                <View style={styles.textInputStyle}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setPassword}
                        value={Password}
                        placeholder='Password' />
                </View>

                <View style={styles.textInputStyle}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setconPassword}
                        value={ConfirmPassword}
                        placeholder='ConfirmPassword' />
                </View>

                <TouchableOpacity style={styles.buttonStyle}
                onPress ={()=>{navigation.push('LoginPage')}}>
                    <Text style={styles.buttonTextStyle}>Signup</Text>
                </TouchableOpacity>

                <Text style={styles.link} 
                onPress ={()=>{navigation.push('LoginPage')}}>
                    Already have an account...?</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
       // paddingTop:170,
        backgroundColor: '#E8E8FF',
    },
    HeadingText: {
        fontSize: 40,
    
        fontWeight: 'bold',
        textAlign: 'center'
    },

    box1: {
        position : 'relative',
       // top : 20,
        alignItems : 'center'
    },
    link:{
        marginTop:70,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#0b780e',
    },

    textInputStyle: {
        height: 50,
        width: '80%',
        backgroundColor: '#D9D9D9',
        marginBottom: 20,
        alignItems : 'center',
        borderRadius:10,
        position : 'relative',
        top : 40
    },
    imageStyle: {
        height: 200,
        width: "30%",
       // left: 105,
        //bottom: 40,
        alignItems:'center',
        position : 'relative',
        //top : 30
    },

    /*textInputStyle2: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:100,
        marginLeft:80,
        borderRadius:10
    },*/

    /*textInputStyle1: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:30,
        marginLeft:80,
        borderRadius:10 

    },*/
    InputTextStyle: {
        position: 'relative',
        top: 5,
        fontSize: 18,
        marginLeft: 5,
        textAlign : 'center'

    },
    buttonStyle: {
        backgroundColor: '#F97777',
        height: 45,
        width: '70%',
        //marginBottom: 20,
        //marginLeft:150,
        borderRadius:10,
        marginTop:80,
        alignItems :'center'
    },
    buttonTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        position: 'relative',
      

    },
},
)

export default CreateSignupPage;