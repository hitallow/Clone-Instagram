import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default class Profile extends Component {
    state = {
        email: 'fulanodetal@gmail.com',
        nickname: 'Fulano de tal'
    }

    logout = () => {

    }
    render() {
        return (
            <View style={styles.container}>
                <Gravatar style={styles.avatar}
                    options={{
                        email: this.state.email,
                        secure: true
                    }}
                />
                <Text style={styles.email}>{this.state.nickname}</Text>
                <Text style={styles.nickname}>{this.state.nickname}</Text>
                <TouchableOpacity style={styles.button} onPress={this.logout} >
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    email: {
        fontSize: 25,
        marginTop: 20,
    },
    nickname: {
        marginTop: 30,
        padding: 10,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#4286f4',
        padding: 10,
        marginTop: 30
    },
    textButton: {
        color: '#fff',
        fontSize: 20
    }
})