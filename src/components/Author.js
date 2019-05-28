import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default props => {
    return (
        <View style={styles.container}>
            <Gravatar options={{
                email: props.email,
                secure: true
            }} style={styles.avatar}/>
            <Text style={styles.author}>{props.nickname}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    avatar:{
        width : 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 15,
    }
})