import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Post from '../components/Post'
import Header from '../components/Header'

import { connect } from 'react-redux'


class Feed extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.props.posts} renderItem={({ item }) => <Post key={item.id} {...item} />}
                    keyExtractor={item => item.toString()}
                />
            </View>
        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5fcff",
    }
})
const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps, null)(Feed)