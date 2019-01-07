/**
 * Created by iampamungkas on 2/13/18.
 */


import React from 'react'
// Replace Dashboard with the component name
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Text, StyleSheet, View } from 'react-native'
// Screens
import HomepageScreen from './views/Homepage/HomepageScreen'
import HistoryScreen from './views/History/HistoryScreen'
import SearchScreen from './views/Search/SearchScreen'
import DetailSearch from '../DetailSearch/views/DetailSearch'
import ProfileScreen from './views/Profile/ProfileScreen'
import DetailNavigation from '../Detail/views/DetailNavigation'
import SearchNavigation from './views/Search/SearchNavigation'

const style = StyleSheet.create({
  tabText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#27ae60',
    height: 0,
  },
})


const routeConfiguration = {
  Homepage: {
    screen: HomepageScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-home" size={20} color={tintColor} />,
    },
  },
  Search: {
    screen: SearchNavigation,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-search" size={20} color={tintColor} />,
    },
  },
  Generate: {
    screen: View,
    navigationOptions: {
        // navigationOptions: () => {console.log('donothing')},
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-add-circle" size={30} color={"#27ae60"} />,
    },
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-time" size={20} color={tintColor} />,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-person" size={20} color={tintColor} />,
    },
  },
}

// going to disable the header for now
const TabNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Homepage',
  tabBarPosition: 'bottom',
  // tabBarComponent: TabBarBottom,
  tabBarComponent: ({jumpToIndex, ...props, navigation}) => (
           <TabBarBottom
               {...props}
               jumpToIndex={index => {
                   if (index === 2) {
                       navigation.navigate('DetailNavigation')
                   }
                   else {
                       jumpToIndex(index)
                   }
               }}
           />

       ),
  lazy:true,
  animationEnabled: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#27ae60',
    inactiveTintColor: '#d2d0ce',
    style: {
      backgroundColor: '#fefefe',
      borderTopWidth: 1,
      borderTopColor: 'white',
      elevation: 1,
      padding: 0,
      margin: 0,
    },
  },
}

export const NavigatorDashboard = TabNavigator(routeConfiguration, TabNavigatorConfiguration)
