import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'

import { StatusBar } from 'react-native'
import HomeNavigation from './src/componenets/Home/views/HomeNavigation'
const store = configureStore();
export default class GenwisApp extends Component {
    render() {
        return (
            <Provider store={store}>
              <View style={container1}>
                <HomeNavigation/>
              </View>
            </Provider>
        );
    }
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
AppRegistry.registerComponent('GenwisApp', () => GenwisApp);
