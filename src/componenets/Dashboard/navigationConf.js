/**
 * Created by iampamungkas on 11/25/17.
 */
'use strict'

// Replace Dashboard with the component name

import {StackNavigator} from 'react-navigation'

// Screens
import DashboardScreen from './views/DashboardScreen'

const routeConfiguration = {
  DashboardScreen: {screen: DashboardScreen},
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'DashboardScreen'
}

export const NavigatorDashboard = StackNavigator(routeConfiguration, stackNavigatorConfiguration)