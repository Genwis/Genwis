/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Screens
import DetailSearch from './views/DetailSearch'

const routeConfiguration = {
  DetailSearch: { screen: DetailSearch },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'DetailSearch',
}

export const NavigatorDetailSearch = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
