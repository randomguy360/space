import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class MeteorKnowledgeScreen extends Component {
     render(){
         return(
             <View >
             <ScrollView>
             <ImageBackground style={{backgroundColor:'indigo'}}>
                 <View style = {styles.titleBar}>
                  <Text style={styles.titleText}> Meteor Facts</Text>
                 </View>
                 <Image source={require("../assets/meteor_bg3.png")}style={{fontSize:50,marginRight:10,marginLeft:10,marginTop:10,width:300,height:200}}/>
                 <Text style={styles.textPicture}> A meteor is the visible path of a meteoroid that enters the Earth's (or another body's) atmosphere, commonly called a shooting star or falling star.

A meteor is a meteoroid that has entered the earth's atmosphere.

It will then become brightly visible due to the heat produced by the ram pressure.

If a meteor survives its transit of the atmosphere to come to rest on the Earth's surface, the resulting object is called a meteorite.

A meteor striking the Earth or other object may produce an impact crater.

During the entry of a meteoroid into the upper atmosphere, an ionization trail is created, where the molecules in the upper atmosphere are ionized by the passage of the meteor.

Such ionization trails can last up to 45 minutes at a time.

Small, sand-grain sized meteoroids are entering the atmosphere constantly, essentially every few seconds in a given region, and thus ionization trails can be found in the upper atmosphere more or less continuously.

When radio waves are bounced off these trails, it is called meteor scatter communication.</Text>
                <Image  source={require("../assets/meteor_bg2.png")}style={{fontSize:50,marginRight:10,marginLeft:10,marginTop:10,width:300,height:200}}/>

                <TouchableOpacity style={styles.routeCard}onPress={() =>
                      this.props.navigation.navigate("Home")
                  }>
                  <Text style={styles.routeText}>Back</Text>
                    
                  </TouchableOpacity>
                
                 </ImageBackground>
</ScrollView>
             </View>
         )
     }
}
var styles = StyleSheet.create({
    textPicture:{
       marginTop:40,
       marginLeft:10,
       marginRight:10,
       color:'white',
       fontSize:17,
       textAlign:'center'
    },
     titleText:{
       fontSize:40,
       fontWeight:"bold",
       color:"white",
       textAlign:'center'
     },
            routeText:{ 
       
         fontSize:25,
       fontWeight:"bold",
       textAlign:'center',
       color:"black",
       marginTop:5},

           routeCard:{
         flex:0.25,
     marginLeft:30,
     marginRight:30,
     marginTop:30,
     marginBottom:50,
     borderRadius:120,
     backgroundColor:'white'
     
   
     },
    
})
          //<Text style={styles.textPicture}> </Text>