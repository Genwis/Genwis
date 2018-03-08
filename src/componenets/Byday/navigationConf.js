/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Screens
import BydayScreen from './views/BydayScreen'

const routeConfiguration = {
  BydayScreen: { screen: BydayScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'BydayScreen',
}

export const NavigatorByday = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
