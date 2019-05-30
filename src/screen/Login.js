import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/userActions'

class Login extends Component {
    state = {
        name: 'Temporario',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state })
        this.props.navigation.navigate('Profile')
    }

    register = () => {
        this.props.navigation.navigate('Register')        
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
                <TouchableOpacity style={styles.button} onPress={this.register}>
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
    button: {
        marginTop: 30,
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
        borderWidth: 1,
        borderColor: '#333',
    }

})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)