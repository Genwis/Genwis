/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict';

import { StackNavigator } from 'react-navigation'

// Screens
import DetailScreen from './views/DetailScreen'

const routeConfiguration = {
    DetailScreen: { screen: DetailScreen },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'DetailScreen'
};

export const NavigatorDetail = StackNavigator(routeConfiguration,stackNavigatorConfiguration);