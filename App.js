import React from 'react';
import StartScreen from './app/screens/StartScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const globalScreensOptions = {

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreensOptions}>
       <Stack.Screen name="Start" component={StartScreen}/>
       <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

