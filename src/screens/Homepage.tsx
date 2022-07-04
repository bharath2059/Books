import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";

const Homepage = () =>{
    return(
        <SafeAreaView style = {styles.wrapper}>
            
            <View style = {styles.box1}>
                <Text style = {styles.headingstyle}>UBooks</Text>   
            </View>
            <View style = {styles.box2}>
                <View style = {styles.ListStyle}>

                </View>
                <View style = {styles.ListStyle}></View>
                <View style = {styles.ListStyle}></View>
                <View style = {styles.ListStyle}></View>
            </View>
            <View style = {styles.box3}>
                <View style = {styles.HomeLabelStyle}>
                    <Text style ={styles.LabelTextStyle} onPress = {() => { alert!('Home')}}>Home</Text>
                </View>
                <View style = {styles.HomeLabelStyle}>
                    <Text style = {styles.LabelTextStyle}>Search</Text>
                </View>
                <View style = {styles.HomeLabelStyle}>
                    <Text style ={ styles.LabelTextStyle}>PostAd</Text>
                </View>
                <View style = {styles.HomeLabelStyle}>
                    <Text style = {styles.LabelTextStyle}>Profile</Text>
                </View>
            </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    wrapper : {
      // backgroundColor : '#DB95D5'
      width : "100%",
      flex : 1
        
        
        
    },
    box1 : {
        height :70,
        flex : 0.4,
        justifyContent : 'center',
        backgroundColor : '#5DB076',
    },
    box2 : {
        height :70,
        backgroundColor : '#FF2B0E',
        flex : 3,
        flexDirection : 'row',
       flexWrap : 'wrap',
        //alignContent : 'flex-start'
    },
    box3 : {
        height :70,
        backgroundColor : '#595959',
        flex : 0.3,
        flexDirection : 'row'
    },
    headingstyle : {   
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 30
    },
    searchStyle : {
        marginTop : 20,
        alignItems : 'center',
        justifyContent : 'flex-end',
        fontSize : 20   
    },
    ListStyle : {
        height : "50%",
        width : "45%",
        backgroundColor : '#BDBDBD', 
       // marginRight : 10,
        marginBottom : 10,
        marginLeft : 10,
        padding : 50
    },
    HomeLabelStyle :{
        width : "28%",
        justifyContent : 'center'
        
    },
    LabelTextStyle :{
        fontSize : 20,
        fontWeight : '300',
        color : "#ffffff"
        
    }
})

export default Homepage;
