import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ButtomButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}  onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F2AA4CFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
      
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    letterSpacing: 1,
  },
});

export default ButtomButton;