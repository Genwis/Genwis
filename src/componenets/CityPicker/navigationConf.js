/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Screens
import CityPickerScreen from './views/CityPickerScreen'

const routeConfiguration = {
  CityPickerScreen: { screen: CityPickerScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'CityPickerScreen',
}

export const NavigatorCityPicker = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
