/**
 * Created by iampamungkas on 2/13/18.
 */
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text } from 'react-native'
import { Tabs, Tab } from 'native-base'
import ActiveScreen from './ActiveScreen'
import RecentScreen from './ActiveScreen'
import { NavBarComponent } from "./NavBarComponent";

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
})

export default class extends Component {
  render() {
    const { dispatch, navigation } = this.props
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#27ae60" />
        {/*<NavBarComponent/>*/}
        <Tabs
          tabBarPosition="top"
          tabBarUnderlineStyle={{ borderTopWidth: 3, borderColor: '#27ae60' }}
        >
          <Tab
            heading="ACTIVE"
            tabStyle={{ backgroundColor: '#ffffff' }}
            activeTabStyle={{ backgroundColor: '#ffffff' }}
            textStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
            activeTextStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
          >
            <ActiveScreen dispatch={dispatch} navigation={navigation} />
          </Tab>
          <Tab
            heading="RECENT"
            tabStyle={{ backgroundColor: '#ffffff' }}
            activeTabStyle={{ backgroundColor: '#ffffff' }}
            textStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
            activeTextStyle={{ color: '#27ae60', fontWeight: 'bold', fontSize: 10 }}
          >
            <RecentScreen dispatch={dispatch} navigation={navigation} />
          </Tab>
        </Tabs>
      </View>
    )
  }
}
