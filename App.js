import {StatusBar}from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import HomeScreen from "./screens/HomeScreen";
import SpaceCraftScreen from "./screens/SpaceCraftScreen";
import StarMapScreen from "./screens/StarMapScreen";
import DailyPictureScreen from "./screens/DailyPictureScreen";
import SpaceQuiz from './screens/SpaceQuiz';
import Untitledd from './screens/Untitledd';
import PollutionKnowledge from './screens/PollutionKnowledge';
import MeteorKnowledgeScreen from './screens/MeteorKnowledgeScreen';
import SpaceDebris from './screens/SpaceDebris';
import BlackHoleFacts from './screens/BlackHoleFacts';
import SpaceCareer from './screens/SpaceCareer';
export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator InitialRouteName ='Home' screenOptions={{headerShown:false}}>
                 <Stack.Screen name = 'Home'component={HomeScreen}/>
                 <Stack.Screen name = 'SpaceQuiz' component={SpaceQuiz}/>
                 <Stack.Screen name = 'SpaceCareer' component={SpaceCareer}/>
                   <Stack.Screen name = 'Untitledd' component={Untitledd}/>
                     <Stack.Screen name = 'MeteorKnowledgeScreen' component={MeteorKnowledgeScreen}/>
                     <Stack.Screen name = 'BlackHoleFacts' component={BlackHoleFacts}/>
                 <Stack.Screen name = 'SpaceCraftScreen'component={SpaceCraftScreen}/>
                  <Stack.Screen name = 'SpaceDebris'component={SpaceDebris}/>
            
                 <Stack.Screen name = 'StarMapScreen'component={StarMapScreen}/>
                 <Stack.Screen name = 'DailyPictureScreen'component={DailyPictureScreen}/>
                 <Stack.Screen name = 'PollutionKnowledge'component={PollutionKnowledge}/>
          </Stack.Navigator>
          

      </NavigationContainer>
  );
}
const Stack = createStackNavigator()


const styles = StyleSheet.create({
 
});
