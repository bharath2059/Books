import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";

const Searchlist = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text
        style={styles.searchtext}
        onPress={() => {
          navigation.goBack({ name: "Search" });
        }}
      >
        Go Back
      </Text>

      <View style={styles.box2}>
        <View style={styles.ListStyle}>
          <Image
            source={require("./../Assets/1.jpg")}
            style={styles.imageStyle}
          />
          <Text style={styles.listTextStyle}>
            Title : Coding Projects in Python
          </Text>
          <Text style={styles.listTextStyle}>
            Description : you'll learn how to build amazing graphics, fun games,
            and useful apps using Python
          </Text>
          <Text style={styles.listTextStyle}>Price : 50 CAD</Text>
        </View>
        <View style={styles.ListStyle}>
          <Image
            source={require("./../Assets/2.jpg")}
            style={styles.imageStyle}
          />
          <Text style={styles.listTextStyle}>Title : SQL QuickStart</Text>
          <Text style={styles.listTextStyle}>
            Description : THE BEST SQL BOOK FOR BEGINNERS
          </Text>
          <Text style={styles.listTextStyle}>Price : 30 CAD</Text>
        </View>
        <View style={styles.ListStyle}>
          <Image
            source={require("./../Assets/3.jpg")}
            style={styles.imageStyle}
          />
          <Text style={styles.listTextStyle}>Title : Hello World!</Text>
          <Text style={styles.listTextStyle}>
            Description : Computer programming is a powerful tool for children
          </Text>
          <Text style={styles.listTextStyle}>Price : 20 CAD</Text>
        </View>
        <View style={styles.ListStyle}>
          <Image
            source={require("./../Assets/4.jpg")}
            style={styles.imageStyle}
          />
          <Text style={styles.listTextStyle}>Title : Math Challenge</Text>
          <Text style={styles.listTextStyle}>
            Description : Provides students a skill-building practice
          </Text>
          <Text style={styles.listTextStyle}>Price : 25 CAD</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#E8E8FF",
    width: "100%",
    flex: 1,
  },
  box1: {
    height: 70,
    flex: 0.4,
    justifyContent: "center",
    // backgroundColor : '#5DB076',
  },
  box2: {
    height: 70,
    //backgroundColor : '#586B87',
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    //alignContent : 'flex-start'
  },
  box3: {
    height: 70,
    backgroundColor: "#595959",
    flex: 0.3,
    flexDirection: "row",
  },
  headingstyle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  searchStyle: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: 20,
  },
  ListStyle: {
    height: "50%",
    width: "45%",
    backgroundColor: "#BDBDBD",
    // marginRight : 10,
    marginBottom: 10,
    marginLeft: 10,
    padding: 50,
  },
  HomeLabelStyle: {
    width: "28%",
    justifyContent: "center",
  },
  LabelTextStyle: {
    fontSize: 20,
    fontWeight: "300",
    color: "#ffffff",
  },
  imageStyle: {
    height: 200,
    width: 150,
    position: "relative",
    right: 40,
    bottom: 50,
  },
  listTextStyle: {
    position: "relative",
    right: 40,
    bottom: 50,
    width: 150,
    fontSize: Platform.OS == "ios" ? 14 : 18,
  },
  searchtext: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Searchlist;
