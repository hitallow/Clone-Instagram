import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class Register extends Component {

    state = {
        email: '',
        password: '',
        nickname: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome ...' value={this.state.nickname} autoFocus={true} style={styles.input}
                    onChangeText={(nickname) => this.setState({ nickname })} />
                <TextInput placeholder='Email ...' value={this.state.email} keyboardType='email-address'
                    onChangeText={email => this.setState({ email })} style={styles.input} />
                <TextInput placeholder='Senha...' value={this.state.password} secureTextEntry={true}
                    onChangeText={password => this.setState({ password })} style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderColor: '#333',
        paddingLeft: 15,
    }

})