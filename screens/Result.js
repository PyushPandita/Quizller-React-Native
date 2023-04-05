import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import ButtomButton from '../components/ButtomButton'

 const Result = ({navigation, route}) => {
  const {Score} = route.params;

  const imageResult = Score > 70 ?  "https://cdn.iconscout.com/icon/premium/png-256-thumb/winner-1538366-1315383.png?f=webp&w=256" : "https://cdn.iconscout.com/icon/free/png-256/winner-king-1921870-1624652.png?f=webp&w=256"
  

  const goToHome = () => {
  return ( navigation.navigate('HomeScreen'));
}

  return (
    <View style={styles.parent}>
      <Title name = 'Result'/>
      <Text style={styles.score}>{Score}</Text>

      <View style={styles.BannerContainer}>
        <Image style={styles.Banner} source={{uri: imageResult}}/>
      </View>

      <ButtomButton onPress= {goToHome} name= 'GO TO HOME' />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#000',
    paddingTop: 40,
    paddingHorizontal: 16,
    height: '100%',
  },

  result: {
    fontWeight: 500,
    marginBottom: 10,
  },

  score: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 20,
    color: '#F2AA4CFF',
  },
  
  BannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
  
  Banner: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});

export default Result;
// export {goToHome};