import React from 'react'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screen/Feed'
import AddPhoto from './screen/AddPhoto'
import Profile from './screen/Profile'
import Login from './screen/Login'
import Register from './screen/Register'

/** 
 * Menu de pilha, que vai entre o menu de registrar e
 * o menu de login
*/
const authRouter = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    }
}, {
        initialRouteName: 'Login'
    })

/**
 * Menu de switch entre o profile e o login 
 * */
const loginOrProfile = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
}, {
        initialRouteName: 'Auth'
    })

/**
 * Menu de abas, alternando a tela principal
 */

const TabNavigator = createBottomTabNavigator({
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={30} />
        }
    },
    Camera: {
        name: 'Camera',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Camera',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    },

}, {
        initialRouteName: 'Feed',
        tabBarOptions: {
            showLabel: false,
        }
    })

export default TabNavigator