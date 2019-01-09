/**
 * Created by iampamungkas on 7/28/17.
 */


// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorDatePicker } from '../navigationConf'
import {View,Text} from 'react-native'
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  navigationState: state.DatePicker,
  detail: state.selectedDetail,
})
// var prop = ''
// class DatePickerNavigationz extends React.Component {
//     // componentWillReceiveProps = (nextProps)=>{
//     //     console.log("componentWillReceiveProps", nextProps);
//     //     prop = nextProps
//     // }
//
//     render() {
//         console.log('navigation startorend',this.props.detail.chooseStartDate)
//         return(<View><Text>{this.props.detail.chooseStartDate ? 'Choose starting date' : 'Choose ending date'}</Text></View>)
//     }
// }
// const Child = (props) => {
//   return (
//     'jhello'
//   )
// }
// const Connector = connect(mapStateToProps)(Child)

// const judul = state => {
//     const nextState = state.selectedDetail
//     if(nextState.chooseStartDate){
//         return ({ judul: 'Choose starting date'})
//     }else{
//         return ({  judul:'Choose ending date'})
//     }
// }
var asfar = false
class DatePickerNavigation extends React.Component {
    // static navigationOptions = {
        // header: (<Connector/>)
        // title: Connector
      // header: null,
      // title: this.props.chooseStartDate ? 'Choose starting date' : 'Choose ending date',
   //    headerTintColor: '#ffffff',
   //    headerStyle: {
   //   backgroundColor: '#27ae60',
   // },
   // headerTitleStyle: {
   //    fontWeight: 'normal',
   //    color: '#ffffff',
   //    fontFamily: 'Lato-Regular',
   //    fontSize: 16,
   //    letterSpacing: 0.91
   //  },
    // }

       componentWillMount() {
           // console.log("componentWillMount",this.props)
           this.props.navigation.setParams({detail:this.props.detail})
           asfar=true
       }
       static navigationOptions = ({navigation}) => {
           // console.log('navnav',navigation.state.params)
           let toGo = ''
           let toGiv = ''
           if(asfar==true){
               if(navigation.state.params.detail.chooseStartDate!=null){
                   toGo = navigation.state.params.detail.chooseStartDate
                   asfar=false
               }
           }
           if(toGo===true){
               toGiv ='Choose starting date'
           }else if (toGo===false){
               toGiv ='Choose ending date'
           }else{
               toGiv = ''
           }

           return ({
         // header: null,
         title: toGiv,
         headerTintColor: '#ffffff',
         headerStyle: {
        backgroundColor: '#27ae60',
      },
      headerTitleStyle: {
         fontWeight: 'normal',
         color: '#ffffff',
         fontFamily: 'Lato-Regular',
         fontSize: 16,
         letterSpacing: 0.91
       },
       })}
    render() {

      const { navigationState, dispatch, navigation } = this.props

      // console.log('date pick!')
      return (<NavigatorDatePicker
        navigation={
                  addNavigationHelpers({
                      dispatch,
                      state: navigationState,
                    addListener: navigation.addListener,
                  })
              }
      />

      )
    }
}
export default connect(mapStateToProps)(DatePickerNavigation)
