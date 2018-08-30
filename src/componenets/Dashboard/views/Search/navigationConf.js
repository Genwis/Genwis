import { StackNavigator } from 'react-navigation'

// Screens
import SearchScreen from './SearchScreen'

const routeConfiguration = {
  SearchScreen: { screen: SearchScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'SearchScreen',
}

export const NavigatorSearch = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
