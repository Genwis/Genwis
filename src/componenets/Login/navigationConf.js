/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Screens
import LoginScreen from './views/LoginScreen'

const routeConfiguration = {
  LoginScreen: { screen: LoginScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
}

export const NavigatorLogin = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
