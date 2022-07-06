import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const CreateSignupPage = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setconPassword] = useState('')
    return (
        <SafeAreaView style={styles.Wrapper}>
            <View style={styles.box1}>
                <Text style={styles.HeadingText}>Create An Account</Text>

                <View style={styles.textInputStyle2}>
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

                <View style={styles.textInputStyle1}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setPassword}
                        value={Password}
                        placeholder='Password' />
                </View>

                <View style={styles.textInputStyle1}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setconPassword}
                        value={ConfirmPassword}
                        placeholder='ConfirmPassword' />
                </View>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Signup</Text>
                </TouchableOpacity>

                <Text style={styles.link}>Already have an account...?</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        paddingTop:170,
        backgroundColor: '#E8E8FF',
    },
    HeadingText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    box1: {
        flex: 3,
    },
    link:{
        marginTop:40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#0b780e',
    },

    textInputStyle: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:30,
        marginLeft:80,
        borderRadius:10
    },
    textInputStyle2: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:100,
        marginLeft:80,
        borderRadius:10
    },

    textInputStyle1: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:30,
        marginLeft:80,
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
        width: 100,
        marginBottom: 20,
        marginLeft:150,
        borderRadius:10,
        marginTop:60,
    },
    buttonTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        position: 'relative',
      

    },
},
)

export default CreateSignupPage;