import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'

import HomeNavigation from './src/componenets/Home/views/HomeNavigation'
import MapScreen from './src/componenets/Map/views/MapScreen'
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
