import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class KnowledgeAboutWaterAndAirPollution extends Component {
     render(){
         return(
            <View style= {styles.container}>
                   
                  <SafeAreaView style={styles.androidSafeArea}/> 
                  <ImageBackground source={require('../assets/space.gif')}style={styles.backgroundImage}>
                  <Image source={require('../assets/main-icon.png')}style={{alignSelf:'center',height:180,width:180}}/>
                  <View style = {styles.titleBar}>
                  <Text style={styles.titleText}> Pollution Of Knowledge</Text>
                  </View>
                  <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("SpaceDebris")
                  }>
                  <Text style={styles.routeText}>Space Debris</Text>
                   
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("Home")
                  }>
                  <Text style={styles.routeText}>Back</Text>
                    
                  </TouchableOpacity>
                   
                 </ImageBackground>
             </View>

         )
     }
}

var styles = StyleSheet.create({
     container:{
       flex:1
     } ,
     androidSafeArea:{
          marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
     },
     routeCard:{
           flex:0.25,
     marginLeft:30,
     marginRight:30,
     marginTop:50,
     marginBottom:120,
     borderRadius:120,
     backgroundColor:'white',
     
   
     },
     titleText:{
       fontSize:40,
       fontWeight:"bold",
       color:"white",
       textAlign:'center'
     },
     backgroundImage:{
       flex:1,
       resizeMode:'cover'
     },
     routeText:{ 
       
       
         fontSize:25,
       fontWeight:"bold",
       textAlign:'center',
       color:"black",
       marginRight:0,
       marginTop:5,

     
      
     },
    
     iconImage:{
       position:"absolute",
       height:80,
       width:80,
       resizeMode:"contain",
       right:0,
       top:-20
     }
})