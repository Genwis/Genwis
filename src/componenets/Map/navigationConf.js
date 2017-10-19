/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import MapScreen from './views/MapScreen'

const routeConfiguration = {
    MapScreen: { screen: MapScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'MapScreen'
}

export const NavigatorMap = StackNavigator(routeConfiguration,stackNavigatorConfiguration)