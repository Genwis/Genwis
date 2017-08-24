/**
 * Created by iampamungkas on 7/30/17.
 */
'use strict';

import { StackNavigator } from 'react-navigation'

// Screens
import BookScreen from './views/BookScreen'
import BookScreenFinish from './views/BookScreenFinish'

const routeConfiguration = {
    BookScreen: { screen: BookScreen },
    BookScreenFinish: { screen: BookScreenFinish }
};

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'BookScreen'
};

export const NavigatorBook = StackNavigator(routeConfiguration,stackNavigatorConfiguration);