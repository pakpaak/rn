import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mi primera app en react-native!</Text>
        <Image source={{uri: 'https://media1.tenor.com/images/ea9df861113fecec5bb17bf1faa0124e/tenor.gif'}}
          style={{width: 350, height: 200}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
