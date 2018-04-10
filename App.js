import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  AsyncStorage,
} from 'react-native'
import configureStore from './src/store/configureStore'
import moment from 'moment'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import HomeNavigation from './src/componenets/Home/views/HomeNavigation'

const store = configureStore()
persistStore(store, { storage: AsyncStorage, blacklist: ['Home', 'Book', 'Dashboard'] })
const idLocale = require('moment/locale/id');
type Props = {};
export default class App extends Component<Props> {
  render() {
    moment.locale('en')
    return (
      <Provider store={store}>
        <View style={container1}>
          <HomeNavigation />
        </View>
      </Provider>
    )
  }
}
const container1 = {
  backgroundColor: '#ffffff',
  flex: 1,
}
