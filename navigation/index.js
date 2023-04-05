import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const MyStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;