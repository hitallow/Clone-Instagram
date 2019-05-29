import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screen/Feed'
import AddPhoto from './components/AddPhoto'


const tabNavigator = createBottomTabNavigator({
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
        screen: Feed,
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
export default tabNavigator