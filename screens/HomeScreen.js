import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title';
import ButtomButton from '../components/ButtomButton';

const HomeScreen = ({navigation}) => {

  const goToQuiz = () => {
    return (navigation.navigate('Quiz'));
  }

  return (
    <View style={styles.parent}>
      <Title name = 'Quizzler'/>

      <View style={styles.BannerContainer}>
        <Image style={styles.Banner} source={{uri: "https://i.pinimg.com/564x/5d/2c/7c/5d2c7cd2864204255bafc78db3282ccc.jpg"}}/>
      </View>

      <ButtomButton onPress = { goToQuiz } name='START' />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    paddingTop: 40,
    paddingHorizontal: 16,
    height: '100%',
    backgroundColor: '#000',
  },

  BannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Banner: {
    width: 350,
    height: 500,
    borderRadius: 20,
  },

});


export default HomeScreen;