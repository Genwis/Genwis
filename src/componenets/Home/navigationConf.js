/**
 * Created by iampamungkas on 7/28/17.
 */


import { StackNavigator } from 'react-navigation'

// Navigators
import DetailNavigation from '../Detail/views/DetailNavigation'
import ListNavigation from '../List/views/ListNavigation'
import DetailSearchNavigation from '../DetailSearch/views/DetailSearchNavigation'
import BookNavigation from '../Book/views/BookNavigation'
import HomeScreen from './views/HomeScreen'
import BydayNavigation from '../Byday/views/BydayNavigation'
import MapNavigation from '../Map/views/MapNavigation'
import LoginNavigation from '../Login/views/LoginNavigation'
import SignUpNavigation from '../SignUp/views/SignUpNavigation'
import DashboardNavigation from '../Dashboard/views/DashboardNavigation'

const routeConfiguration = {
  HomeScreen: { screen: HomeScreen },
  DetailNavigation: { screen: DetailNavigation },
  ListNavigation: { screen: ListNavigation },
  BookNavigation: { screen: BookNavigation },
  BydayNavigation: { screen: BydayNavigation },
  MapNavigation: { screen: MapNavigation },
  LoginNavigation: { screen: LoginNavigation },
  SignUpNavigation: { screen: SignUpNavigation },
  DashboardNavigation: { screen: DashboardNavigation },
  DetailSearchNavigation: { screen: DetailSearchNavigation },
}
export const NavigatorHome = StackNavigator(routeConfiguration)
