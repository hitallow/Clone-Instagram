import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput placeholder='email' keyboardType='email-address' style={styles.input}
                    value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Senha' secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={this.login}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.textButton}>Criar nova conta</Text>
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
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    textButton:{
        fontSize: 20,
        color: '#fff'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }

})