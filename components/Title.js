import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = (props)  => {
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 10,
  },

  title: {
    fontSize: 36,
    fontWeight: '600',
    letterSpacing: 4,
    color: '#F2AA4CFF',
  }
});

export default Title;