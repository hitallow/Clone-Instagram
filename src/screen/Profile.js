import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions'

class Profile extends Component {

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate("Auth")
    }
    render() {
        return (
            <View style={styles.container}>
                <Gravatar style={styles.avatar}
                    options={{
                        email: this.props.email,
                        secure: true
                    }}
                />
                <Text style={styles.email}>{this.props.email}</Text>
                <Text style={styles.nickname}>{this.props.name}</Text>
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


const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)