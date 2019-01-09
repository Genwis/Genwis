/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Screens
import DatePickerScreen from './views/DatePickerScreen'

const routeConfiguration = {
  DatePickerScreen: { screen: DatePickerScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'DatePickerScreen',
}

export const NavigatorDatePicker = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
