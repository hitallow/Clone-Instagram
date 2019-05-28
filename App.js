import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import Image from './assets/imgs/fence.jpg'



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Post image={Image} />
        <Post image={Image} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


