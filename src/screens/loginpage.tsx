import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState } from "react";
import Input from "../Component/input";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const config = {
  fields: {
    email: {
      placeholder: "Email",
      type: "text",
      textContentType: "emailAddress", //iOS
      autoComplete: "email", //Android,
      name: "email",
    },
    password: {
      placeholder: "Password",
      type: "password",
      textContentType: "newPassword", //iOS
      name: "email",
    },
  },
};

const CreateLoginPage = ({ navigation, route }) => {
  const [email, onEmailChange] = React.useState(email);
  const [password, onPasswordChange] = React.useState(password);

  const SignIn = () => {
    if (email === "bharath@gmail.com" && password === "password") {
      navigation.push("Homepage");
    } else {
      alert(
        "Please enter following details,email : bharath@gmail.com, password : password"
      );
    }
  };
  const refreshPage = () => {
    onEmailChange(null);
    onPasswordChange(null);
  };
  React.useEffect(() => {
    if (email === "") {
      onEmailChange(null);
    }
  }, [email]);
  React.useEffect(() => {
    if (password === "") {
      onPasswordChange(null);
    }
  }, [password]);

  return (
    <SafeAreaView style={styles.Wrapper}>
      <Image
        source={require("./../Assets/logo.jpeg")}
        style={styles.imageStyle}
      />
      <View style={styles.box1}>
        <Text style={styles.HeadingText}>Login</Text>
        <View style={styles.i}>
          <Input
            value={email}
            config={config.fields.email}
            onChangeText={onEmailChange}
          />

          <Input
            value={password}
            config={config.fields.password}
            onChangeText={onPasswordChange}
          ></Input>
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            SignIn();
          }}
        >
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
        <Text
          style={styles.link}
          onPress={() => {
            navigation.push("SignUp");
          }}
        >
          Don't have an account?
        </Text>
        <Text
          style={styles.link1}
          onPress={() => {
            navigation.push("Forgotpasspage");
          }}
        >
          Forgot Pasword?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 170,
    backgroundColor: "#E8E8FF",
  },
  HeadingText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  i: {
    alignItems: "center",
  },

  imageStyle: {
    height: 200,
    width: "30%",
    // left: 105,
    //bottom: 40,
    alignItems: "center",
    position: "relative",
    top: 30,
  },

  box1: {
    // flex: 3,
    width: "100%",
  },

  link: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0b780e",
  },
  link1: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0b780e",
  },

  textInputStyle: {
    height: 40,
    width: "70%",
    backgroundColor: "#D9D9D9",
    marginBottom: 0,

    marginTop: 30,

    // marginLeft:80,
    borderRadius: 10,
  },
  textInputStyle1: {
    height: 40,
    width: "70%",
    backgroundColor: "#D9D9D9",
    marginBottom: 0,
    marginTop: 30,
    // marginLeft:80,
    borderRadius: 10,
  },
  InputTextStyle: {
    position: "relative",
    top: 5,
    fontSize: 18,
    marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: "#F97777",
    height: 45,
    width: 200,
    marginBottom: 20,
    // marginLeft:165,
    borderRadius: 10,
    marginTop: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 25,
    textAlign: "center",
    position: "relative",
  },
});

export default CreateLoginPage;
