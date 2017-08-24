/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict';

import { StackNavigator } from 'react-navigation'

// Screens
import ListScreen from './views/ListScreen'

const routeConfiguration = {
    ListScreen: { screen: ListScreen },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'ListScreen'
};

export const NavigatorList = StackNavigator(routeConfiguration,stackNavigatorConfiguration);