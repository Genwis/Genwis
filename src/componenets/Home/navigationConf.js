/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict';

import { StackNavigator } from 'react-navigation'

//Navigators
import DetailNavigation from '../Detail/views/DetailNavigation'
import ListNavigation from'../List/views/ListNavigation'
import BookNavigation from'../Book/views/BookNavigation'
import HomeSreen from './views/HomeScreen'

const routeConfiguration = {
    HomeScreen: { screen: HomeSreen },
    DetailNavigation: { screen: DetailNavigation },
    ListNavigation: { screen: ListNavigation },
    BookNavigation: { screen: BookNavigation }
}
export const NavigatorHome = StackNavigator(routeConfiguration)