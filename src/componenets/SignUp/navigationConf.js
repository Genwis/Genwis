/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Screens
import SignUpScreen from './views/SignUpScreen'

const routeConfiguration = {
  SignUpScreen: { screen: SignUpScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'SignUpScreen',
}

export const NavigatorSignUp = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
