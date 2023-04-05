import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import MyStack from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {

    const [isLoading, setIsLoading] = useState(false)

setTimeout(() => {
  setIsLoading(true)}, 3000
);

  return (
    <>
      <NavigationContainer>
        <StatusBar styles= 'light'/>
        {isLoading ? <MyStack /> : <WelcomeScreen/>}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
