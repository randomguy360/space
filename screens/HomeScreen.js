import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image,TextInput}from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class HomeScreen extends Component {
     render(){
         return(
            <View style= {styles.container}>
            <TextInput 
          style ={styles.bar}/>
                   
                  <SafeAreaView style={styles.androidSafeArea}/> 
                  <ImageBackground source={require('../assets/space.gif')}style={styles.backgroundImage}>
                  <Image source={require('../assets/main-icon.png')}style={{alignSelf:'center',height:180,width:180}}/>
                  <View style = {styles.titleBar}>
                  <Text style={styles.titleText}> Stellar App</Text>
                  </View>
                  <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("SpaceQuiz")
                  }>
                  <Text style={styles.routeText}>Space Facts</Text>
                   
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("PollutionKnowledge")
                  }>
                  <Text style={styles.routeText}>Pollution KnowLedge</Text>
                   
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("SpaceCraftScreen")
                  }>
                  <Text style={styles.routeText}>Space Crafts</Text>
                    
                  </TouchableOpacity>
                   <TouchableOpacity style={styles.routeCard}
                   onPress = {() =>
                   this.props.navigation.navigate("StarMapScreen")}>
                  <Text style={styles.routeText}>Star Map</Text>
               
                  
                    
                  </TouchableOpacity>
                   <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("DailyPictureScreen")
                  }>
                  
                  <Text style={styles.routeText}> Daily Pictures</Text>
                  
                   
                   
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.routeCard}
                   onPress = {() =>
                   this.props.navigation.navigate('SpaceCareer')}>
                  <Text style={styles.routeText}>Space Careers</Text>
               
                  
                    
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
     marginTop:30,
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
       marginTop:13,
       

     
      
     },
    
     iconImage:{
       position:"absolute",
       height:80,
       width:80,
       resizeMode:"contain",
       right:0,
       top:-20
     },
       bar:{
      
      height:30,
      width:300,
      
    },
})