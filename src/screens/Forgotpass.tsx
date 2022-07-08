import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

const Forgotpass = () => {
    const [Email, setEmail] = useState('')
    return (
        <SafeAreaView style={styles.Wrapper}>
            <View style={styles.box1}>
                <Text style={styles.HeadingText}>Forgot Password</Text>

                <View style={styles.textInputStyle}>
                    <TextInput style={styles.InputTextStyle}
                        onChangeText={setEmail}
                        value={Email}
                        placeholder='Emailid' />
                </View>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#E8E8FF',
    },
    HeadingText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    imageStyle: {
        height: 200,
        width: 200,
        left: 105,
        bottom: 40,
        alignItems: 'center',
    },

    box1: {
        flex: 3,
    },

    link: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0b780e',
    },
    link1: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0b780e',
    },


    textInputStyle: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop: 80,
        marginLeft: 80,
        borderRadius: 10

    },
    textInputStyle1: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop: 30,
        marginLeft: 80,
        borderRadius: 10

    },
    InputTextStyle: {
        position: 'relative',
        top: 5,
        fontSize: 18,
        marginLeft: 5,

    },
    buttonStyle: {
        backgroundColor: '#F97777',
        height: 35,
        width: 80,
        marginBottom: 20,
        marginLeft: 150,
        borderRadius: 10,
        marginTop: 60,
    },
    buttonTextStyle: {
        
        fontSize: 25,
        textAlign: 'center',
        position: 'relative',

    },
},
)

export default Forgotpass;