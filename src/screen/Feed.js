import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Post from '../components/Post'
import Header from '../components/Header'


export default class Feed extends Component {

    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafael@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [{
                    nickname: 'John Ray Sheldon',
                    comment: 'Incrivel'
                }, {
                    nickname: 'Ana Julia Arruda',
                    comment: 'Foto Linda'
                }]
            },
            {
                id: Math.random(),
                nickname: 'Francisco Leandro Lima',
                email: 'flima@gmail.com',
                image: require('../../assets/imgs/boat.jpg'),
                comments: []
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts} renderItem={({ item }) => <Post key={item.id} {...item} />}
                    keyExtractor={item => item.toString()}
                />
            </View>
        )

    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f5fcff",
    }
}) 