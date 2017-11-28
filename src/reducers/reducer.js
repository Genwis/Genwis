/**
 * Created by iampamungkas on 7/24/17.
 */

import { combineReducers } from 'redux'
// Reducers
import { itineraryByDetail, savedItinerary } from './itineraryReducers'
import { selectedDetail } from './detailReducers'
import { users } from './userReducers'
// Navigation
import { NavigatorDetail } from '../componenets/Detail/navigationConf'
import { NavigatorHome} from '../componenets/Home/navigationConf'
import { NavigatorList} from '../componenets/List/navigationConf'
import { NavigatorBook} from '../componenets/Book/navigationConf'
import { NavigatorByday} from '../componenets/Byday/navigationConf'
import { NavigatorMap} from '../componenets/Map/navigationConf'
import { NavigatorLogin} from '../componenets/Login/navigationConf'
import { NavigatorSignUp} from '../componenets/SignUp/navigationConf'
import { NavigatorDashboard} from '../componenets/Dashboard/navigationConf'

const rootReducer = combineReducers({
    itineraryByDetail,
    selectedDetail,
    users,
    savedItinerary,
    Detail: (state, action) => NavigatorDetail.router.getStateForAction(action,state),
    Home: (state,action) => NavigatorHome.router.getStateForAction(action,state),
    List: (state,action) => NavigatorList.router.getStateForAction(action,state),
    Book: (state,action) => NavigatorBook.router.getStateForAction(action,state),
    Byday: (state,action) => NavigatorByday.router.getStateForAction(action,state),
    Map: (state,action) => NavigatorMap.router.getStateForAction(action,state),
    Login: (state,action) => NavigatorLogin.router.getStateForAction(action,state),
	  SignUp: (state,action) => NavigatorSignUp.router.getStateForAction(action,state),
    Dashboard: (state,action) => NavigatorDashboard.router.getStateForAction(action,state),
})

export default rootReducer
