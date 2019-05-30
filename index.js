import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import TabNavigator from './src/Navigation'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()
const redux = () => {
    return (
        <Provider store={store}>
            <TabNavigator/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => redux);
