/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import DetailNavigation from '../Detail/views/DetailNavigation'
import ListNavigation from'../List/views/ListNavigation'
import BookNavigation from'../Book/views/BookNavigation'
import HomeScreen from './views/HomeScreen'
import BydayNavigation from '../Byday/views/BydaylNavigation'

const routeConfiguration = {
    HomeScreen: { screen: HomeScreen },
    DetailNavigation: { screen: DetailNavigation },
    ListNavigation: { screen: ListNavigation },
    BookNavigation: { screen: BookNavigation },
    BydayNavigation: {  screen: BydayNavigation}
}
export const NavigatorHome = StackNavigator(routeConfiguration)