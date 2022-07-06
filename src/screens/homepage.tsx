import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, Platform} from "react-native";


const Homepage = () =>{
    return(
        <SafeAreaView style = {styles.wrapper}>
            
            <View style = {styles.box1}>
                <Text style = {styles.headingstyle}>UBooks</Text>   
            </View>
            <View style = {styles.box2}>
                <View style = {styles.ListStyle}>
                    <Image source = {require('./../Assets/1.jpeg')} style = {styles.imageStyle}/>
                    <Text style = {styles.listTextStyle}>Title : Hansel&Gretel</Text>
                    <Text style = {styles.listTextStyle}>Description : This is a very good book for your kids bedtime stories</Text>
                    <Text style = {styles.listTextStyle}>Price : 50 CAD</Text>
                </View>
                <View style = {styles.ListStyle}>
                <Image source = {require('./../Assets/2.jpeg')} style = {styles.imageStyle}/>
                    <Text style = {styles.listTextStyle}>Title : Jataka Tales</Text>
                    <Text style = {styles.listTextStyle}>Description : This is a very good book for your kids bedtime stories</Text>
                    <Text style = {styles.listTextStyle}>Price : 30 CAD</Text> 
                </View>
                <View style = {styles.ListStyle}>
                <Image source = {require('./../Assets/3.jpeg')} style = {styles.imageStyle}/>
                    <Text style = {styles.listTextStyle}>Title : Grandpa's Tales</Text>
                    <Text style = {styles.listTextStyle}>Description : This is a very good book for your kids bedtime stories</Text>
                    <Text style = {styles.listTextStyle}>Price : 20 CAD</Text> 
                </View>
                <View style = {styles.ListStyle}>
                <Image source = {require('./../Assets/4.jpeg')} style = {styles.imageStyle}/>
                    <Text style = {styles.listTextStyle}>Title : The Clever Fox</Text>
                    <Text style = {styles.listTextStyle}>Description : This is a very good book for your kids bedtime stories</Text>
                    <Text style = {styles.listTextStyle}>Price : 25 CAD</Text>  
                </View>
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
        // backgroundColor : '#5DB076',
    },
    box2 : {
        height :70,
        //backgroundColor : '#FF2B0E',
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
        padding : 50,
        
    },
    HomeLabelStyle :{
        width : "28%",
        justifyContent : 'center'
        
    },
    LabelTextStyle :{
        fontSize : 20,
        fontWeight : '300',
        color : "#ffffff"  
    },
    imageStyle : {
        height : 200, 
        width : 150,
        position :'relative',
        right : 40,
        bottom : 50
    },
    listTextStyle : {
        position : 'relative',
        right : 40,
        bottom : 50,
        width : 150, 
        fontSize : Platform.OS =='ios' ? 14 : 18
    }
})

export default Homepage;