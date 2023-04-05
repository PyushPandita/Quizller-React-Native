import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

 const WelcomeScreen = () => {
  return (
    <View style={styles.parent}>
      <View>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-quiz-team-building-flaticons-flat-flat-icons.png"}}/>
      </View>

      <Text style={styles.welcomeText}>Welcome To The Quizzler</Text>
      <Text style={{color: '#F2AA4CFF', marginTop: 110, fontSize: 15, fontWeight: 'bold'}}>Made in India 🇮🇳 with Love ❤️</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },  
  
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
    },

    welcomeText: {
      alignSelf: 'center', 
      color: '#fff',
      marginVertical: 20,
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 3,
      color: '#F2AA4CFF'
    },
  });
  

export default WelcomeScreen;