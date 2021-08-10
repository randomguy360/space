import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class SpaceCraftScreen extends Component {
     render(){
         return(
             <View >
              <ImageBackground style={{backgroundColor:'indigo'}}>
                 <View style = {styles.titleBar}>
                
                  <Text style={styles.titleText}> Jobs For Astronomy</Text>
                 </View>
                
                   <Image  source={require("../assets/image1.jpg")}style={{marginTop:10,width:330,height:300}}/>
                   <Image  source={require("../assets/image2.jpg")}style={{marginTop:10,width:330,height:300}}/>
                   <Text style ={styles.textPicture}> these are all the main jobs related to space but they can be broken down into more.</Text>
                     <Image  source={require("../assets/image3.jpg")}style={{marginTop:10,width:330,height:300}}/>
                     <Text style ={styles.textPicture}> Work at ISRO INDIA</Text>
                       <Image  source={require("../assets/image4.jpg")}style={{marginTop:10,width:330,height:300}}/> 
                           <Text style ={styles.textPicture}> Work at SpaceX USA</Text>
                    <Image  source={require("../assets/image5.jpg")}style={{marginTop:10,width:330,height:300}}/>
                    <Text style ={styles.textPicture}> Work at NASA USA</Text>
                     
                    
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
    textPicture:{
      flex:0.25,
       marginTop:40,
       marginLeft:5,
       marginRight:5,
       color:'white',
       fontSize:17
    },
     titleText:{
       fontSize:40,
       fontWeight:"bold",
       color:"white",
       textAlign:'center'
     },

        routeCard:{
         flex:0.25,
     marginLeft:30,
     marginRight:30,
     marginTop:30,
     marginBottom:50,
     borderRadius:120,
     backgroundColor:'white'
     
   
     },
   
    
     routeText:{ 
       
         fontSize:25,
       fontWeight:"bold",
       textAlign:'center',
       color:"black",
       marginTop:3




     
      
     },
    
    
})
          //<Text style={styles.textPicture}> </Text>