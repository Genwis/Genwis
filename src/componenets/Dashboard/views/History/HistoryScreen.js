/**
 * Created by iampamungkas on 2/13/18.
 */
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text } from 'react-native'
import { Tabs, Tab } from 'native-base'
import ActiveScreen from './ActiveScreen'
import RecentScreen from './ActiveScreen'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
})
export default class extends Component {
  render() {
    const {dispatch, navigation} = this.props
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#27ae60" />
        <Tabs
          tabBarPosition="bottom"
          tabBarUnderlineStyle={{ borderTopWidth: 3, borderColor: '#27ae60' }}
        >
          <Tab
            heading="ACTIVE"
            tabStyle={{ backgroundColor: '#fefefe' }}
            activeTabStyle={{ backgroundColor: '#fefefe' }}
            textStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
            activeTextStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
          >
            <ActiveScreen dispatch={dispatch} navigation={navigation}/>
          </Tab>
          <Tab
            heading="RECENT"
            tabStyle={{ backgroundColor: '#fefefe' }}
            activeTabStyle={{ backgroundColor: '#fefefe' }}
            textStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
            activeTextStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
          >
            <RecentScreen dispatch={dispatch} navigation={navigation}/>
          </Tab>
        </Tabs>
      </View>
    )
  }
}
