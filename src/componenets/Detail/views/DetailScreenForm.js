/**
 * Created by iampamungkas on 7/28/17.
 */

import React, { Component } from 'react'
import { Dimensions, View, Text, TextInput, Button, StatusBar, TouchableOpacity, Image, ScrollView,BackHandler, Picker } from 'react-native'
import Modal from 'react-native-modalbox'
import moment from 'moment'
import Calendar from 'react-native-calendars/src/calendar/index'
import Autocomplete from 'react-native-autocomplete-input'
import { selectDetail, isPreview } from '../../../actions/actions'
import Axios from 'axios'

import {addNavigationHelpers, NavigationActions} from 'react-navigation'
import { NavigatorList } from '../navigationConf'

export default class DetailScreenForm extends Component {
// componentWillReceiveProps(nextProps) {
//     this.setState({
//         navigation: nextProps.navigation,
//     });
// }
//   constructor(props) {
//     super(props)
//     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
// }
// componentWillMount() {
//   BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
// }
//
// componentWillUnmount() {
//   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
// }
//
// handleBackButtonClick() {
//   this.props.navigation.goBack(null);
//   return true;
// }
    state = {
      isOpen: false,
      startVal: 'choose starting date',
      endVal: 'choose ending date',
      currentStart: '',
      currentEnd: '',
      // currentStart: this.props.detail.start,
      // currentEnd: this.props.detail.finish,
      // budget: this.props.detail.budget,
      budget: '',
      tags: {
        culture: false,
        outdoors: false,
        history: false,
        shopping: false,
        wildlife: false,
        beaches: false,
        mountain: false,
        museum: false,
        amusement: false,
        hidden_paradise: false,
      },
      list:[
        {city: "Bandung", state: "Jawa Barat", Country: "Indoneseia"},
        {city: "Bandongan",  state: "Jawa Tengah", Country: "Indoneseia"},
        {city: "Banten", state: "Banten", Country: "Indoneseia"},
      ],
      autocomplete:[],
      inputValue: "",
      jsonGet:'',
      // cityName:'',
      cityId:'',
      cityStyle: '#bdbdbd',
      erpe: '#bdbdbd',
      startStyle: '#bdbdbd',
      finishStyle: '#bdbdbd',
      budgetValid: true,
      cityValid: true,
      startValid: true,
      endValid: true,
    }
    // componentWillUnmount() {
    //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    // }
    // onBackPress = () => {
    //   const { dispatch, state } = this.props.navigation
    //   // console.log(state)
    //   if (state.routeName === 'DashboardNavigation') {
    //     BackHandler.removeEventListener()
    //     BackHandler.exitApp()
    //     return false
    //   }
    //   dispatch(NavigationActions.navigate({ routeName: 'DashboardNavigation' }))
    //   return true
    // }
    // componentWillMount() {
    //   //console.log('bawah ni')
    //   //console.log(this.props)
    //
    //   // this.setState({
    //   //   ...this.state,
    //   //   currentStart: '',
    //   //   currentEnd: '',
    //   // })
    //   // this.setState({
    //   //   ...this.state,
    //   //   currentStart: nextState.start,
    //   //   currentEnd: nextState.finish,
    //   // })
    // }
    isReallyNaN=(a)=> { return a !== a; };
    componentDidMount() {
        this.props.dispatch(isPreview(false))
        const nextState = this.props.detail
        console.log('received in screenform',nextState)
        //console.log("props detail:")
        //console.log(this.props.detail)
        const start = moment()
        // nextState.location_id = -1
        // nextState.start = start.format("YYYY-MMM-DD")
        // nextState.finish = start.add(3, 'days').format("YYYY-MMM-DD")
        // console.log(nextState) // gotcha bitch!
        // this.props.dispatch(selectDetail(nextState))
        console.log(nextState.cityName)
        console.log('anything')
        let cityStyle,  startStyle, finishStyle, sstart, sfinish, budget
        if(nextState.cityName!=='choose city'){
            cityStyle = '#424242'
        }else{
            cityStyle = '#bdbdbd'
        }
        if(nextState.start!=='choose starting date'){
            startStyle = '#424242'
            sstart = moment(nextState.start, "YYYY-MMM-DD").format('DD MMMM YYYY')
        }else{
            startStyle = '#bdbdbd'
            sstart = nextState.start
        }
        if(nextState.finish!=='choose ending date'){
            finishStyle = '#424242'
            sfinish = moment(nextState.finish, "YYYY-MMM-DD").format('DD MMMM YYYY')
        }else{
            finishStyle = '#bdbdbd'
            sfinish = nextState.finish
        }
        let val = ''
        if(nextState.budget!=''&&nextState.budget!=null&&!this.isReallyNaN(nextState.budget)){
            // if(nextState.budget!==nextState.budget){
            //     budget = '#bdbdbd'
            // }else{
                budget = '#424242'
                val=String(nextState.budget).replace(/(.)(?=(\d{3})+$)/g,'$1.')
            // }

        }else{
            budget = '#bdbdbd'
        }

        // let budg = nextState.budget.split('.').join("")


        this.setState({ ...this.state, cityName: nextState.cityName, cityStyle: cityStyle, start:sstart, finish:sfinish, startStyle: startStyle, finishStyle: finishStyle,budgetVal: nextState.budget, erpe: budget, budget: val})
        // BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
      // Axios.get(`http://api.generatorwisata.com/api/locations`)
      //   .then((response) => {
      //       // let respon = response.data
      //       // respon.unshift({city:'please choose city',id:0})
      //       // let cityStyle =
      //       this.setState({ ...this.state, jsonGet: response.data , cityName: response.data[10].city, cityId: -1,cityStyle: '#bdbdbd',erpe: '#bdbdbd'})
      //       // console.log(this.state.jsonGet)
      //       const nextState = this.props.detail
      //       // nextState.location_id = response.data[10].id
      //       this.props.dispatch(selectDetail(nextState))
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     this.setState({ ...this.state, deskripsi: "Oops, something is wrong, and it's not your fault"})
      //   })

    }
    onBudgetChange = (budget) => {
      const nextState = this.props.detail
      // console.log(budget)
      // console.log('testz')
      // console.log(nextState)
      let color, notempty
      // console.log(budget)
      if(budget!='' && !this.isReallyNaN(budget) && budget != undefined && budget != null){
          color = '#424242'
          notempty = true
          // console.log("zzzz")
      }else{
          color = '#bdbdbd'
          notempty = false
          // console.log("mashok")
      }
      // console.log('erpe',thi222s.state.erpe)
      let budg = budget.split('.').join("")
      let val = String(budg).replace(/(.)(?=(\d{3})+$)/g,'$1.')

      nextState.budget = parseInt(budg)
      this.props.dispatch(selectDetail(nextState))
      console.log(nextState.budget)
      this.setState({
        ...this.state,
        budgetValid : notempty,
        budget:val,
        budgetVal: parseInt(budg),
        erpe: color,
      })
      // console.log(parseInt(budg))
    }
    onStartDateChange(day) {
        // console.log('day',day)
      const nextState = this.props.detail
      this.refs.modal1.close()
      const start = moment(`${day.year}-${day.month}-${day.day >= 10 ? day.day : `0${day.day}`}`, "YYYY-MM-DD")
      let startval = start.format('DD MMMM YYYY')
      nextState.start = start.format("YYYY-MMM-DD")
      if (
        moment(nextState.finish, 'YYYY-MMM-DD').dayOfYear() - start.dayOfYear() < 3
      ) {
      let finish = start.add(3, 'days').format("YYYY-MMM-DD")
        nextState.finish = finish
      }
      // console.log('nekstate',nextState)
      // this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        startValid:true,
        currentStart: nextState.start,
        // currentEnd: nextState.finish,
        // endVal: finish,
        startVal: startval,
        startStyle: '#424242',
      })
      // console.log(start.format('DD MMMM YYYY'))
    }
    onEndDateChange(day) {
        // console.log('day',day)
      const nextState = this.props.detail
      this.refs.modal2.close()
      const finish = moment(`${day.year}-${day.month}-${day.day >= 10 ? day.day : `0${day.day}`}`, "YYYY-MM-DD")
      nextState.finish = finish.format("YYYY-MMM-DD")
      // this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        endValid: true,
        currentEnd: nextState.finish,
        endVal: finish.format('DD MMMM YYYY'),
        finishStyle: '#424242',
      })
    }
    onFilterChange = (tags) => {
      const nextState = this.props.detail
      nextState.tags = tags
      // this.props.dispatch(selectDetail(nextState))
      this.setState({
        ...this.state,
        tags: nextState.tags,
      })
    }
    // onPickerPress = () => {
    //     console.log('onpickerpress')
    //     if(this.state.awal==true){
    //         this.state.jsonGet.shift()
    //         this.setState({ ...this.state, awal:false})
    //     }
    // }
    onSelectItem = (itemid) => {
        // let cityStyle = this.state.cityStyle
        // cityStyle.color = '#424242'
        if(itemid!=-1){
            let retitem = this.state.jsonGet.filter(
                  function(data){ return data.id == itemid }
              );
            //   console.log(retitem.city)
            this.setState({ ...this.state, cityId:itemid, cityStyle:'#424242',cityValid:true}) // setting the value for picker
              const nextState = this.props.detail
              nextState.location_id = itemid
        }
        // console.log(this.state.cityStyle)

          // this.props.dispatch(selectDetail(nextState))
          // this.setState({ ...this.state, autocomplete: [], inputValue:""+retitem.city+", "+item.state})
    }
    cityStyle = function(options) {
   return {fontFamily: 'Lato-Regular',
   fontSize: 20,
   color: this.state.cityStyle,
   letterSpacing: 1.14,
   lineHeight: 35,}
 }
 startStyle = function(options) {
 return {
   fontFamily: 'Lato-Regular',
   fontSize: 20,
   color: this.state.startStyle,
   letterSpacing: 1.14,
   lineHeight: 35,
 }
 }
 finishStyle = function(options) {
 return {
   fontFamily: 'Lato-Regular',
   fontSize: 20,
   color:  this.state.finishStyle,
   letterSpacing: 1.14,
   lineHeight: 35,
 }
 }
 erpeStyle = function(options) {
return {
    lineHeight: 35,
    color: this.state.erpe,
    fontSize: 20,
}
}


    // onLocationChange = (item) => {
    //   const nextState = this.props.detail
    //   nextState.location_id = item.id
    //   this.props.dispatch(selectDetail(nextState))
    //   this.setState({ ...this.state, autocomplete: [], inputValue:""+item.city+", "+item.state})
    // }
    // onShowAutocomplete = (like) => {
    //   this.setState({ ...this.state, inputValue: like })
    //   const headers = {
    //     Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
    //     'Content-Type': 'text/plain',
    //   }
    //   Axios.get(`http://api.generatorwisata.com/api/locations/like?key=${like}`, { headers })
    //     .then((response) => {
    //       this.setState({ ...this.state, autocomplete: response.data})
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
    submita = (nav) => {
        // navigation.navigate('ListNavigation');console.log(this.state.currentStart)
        // console.log('submita clicked')
        let validBudget, validCity, validStart, validEnd
        const nextState = this.props.detail
        // nextState.finish = this.state.currentEnd
        // nextState.start = this.state.currentStart
        nextState.tags = this.state.tags
        // nextState.location_id = this.state.cityId
        // nextState.budget = this.state.budgetVal
        this.props.dispatch(selectDetail(nextState))
        // console.log('todispatch',nextState)
        validBudget = (nextState.budget || nextState.budget === 0)
        validCity = nextState.location_id!=-1
        validStart = nextState.start!='choose starting date'
        validEnd = nextState.finish!='choose ending date'
        // if(!validBudget){
        //     this.setState({ ...this.state, budgetValid:false})
        // }
        // if(!validCity){
        //     this.setState({ ...this.state, cityValid:false})
        // }
        // if(!validStart){
        //     this.setState({ ...this.state, startValid:false})
        // }
        // if(!validEnd){
        //     this.setState({ ...this.state, endValid:false})
        // }
        this.setState({ ...this.state,  budgetValid:validBudget,cityValid:validCity,startValid:validStart,endValid:validEnd})
        if( validBudget && validCity && validStart && validEnd ){
            console.log('data yg mau dikirim',this.props.detail)
            nav.navigate('ListNavigation')
        }
    }

    // onSelect = data => {
    //     console.log('data',data)
    //   };

    handleOnNavigateBack = (foo) => {
  this.setState({
    foo
  })
}

goToCity = (navigation) => {

        navigation.navigate('CityPickerNavigation')

}

goToDate = (navigation,start) => {
    console.log(start)
    const nextState = this.props.detail
    nextState.chooseStartDate = start
    this.props.dispatch(selectDetail(nextState))
        navigation.navigate('DatePickerNavigation')
        // navigation.navigate('CityPickerNavigation')

}
    render() {
      const { detail, navigation, test } = this.props

      // console.log('detail',this.props.detail)
      // console.log(this.state.cityStyle)
      const now = moment()
      const start = moment(detail.start, 'YYYY-MMM-DD')
      const finish = moment(detail.finish, 'YYYY-MMM-DD')
      return (
        <View style={parent}>
          <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={container1} >
              <StatusBar backgroundColor="#229854" />
              <View style={container2}>


                <Text style={cityDestination}>
                              City Destination
                </Text>
                {/*
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Image style={{ resizeMode: 'contain', height: d.height * 0.15 }} source={require('../../../assets/icon/logo_genwis_gear_hijau_2017-07-30/drawable-xhdpi/logo_genwis_gear_hijau.png')} />

                      <Text style={wonderfull} >
                                  Enjoy your tour!
                      </Text>

                      <Text style={{ color: '#bdbdbd', fontFamily: 'Campton' }}>
                        Determine tour itinerary as you wish
                      </Text>
                    </View>
                    <TextInput placeholder="Bandung" style={margin1} underlineColorAndroid="#27ae60" />*/}

                  {/*<View style={{marginTop: 2,marginBottom: d. height * 22/ 360, flex: 1}}><Autocomplete
                    inputContainerStyle={{borderWidth: 0, margin: 0.5}}
                    containerStyle={autoCompleteContainer}
                    data={this.state.autocomplete}
                    value={this.state.inputValue}
                    placeholder="Bandung"
                    autoCapitalize="none"
                    autoCorrect={false}
                    hideResults={this.state.inputValue === ""}
                    onChangeText={text => this.onShowAutocomplete(text)}
                    style={margin1}
                    renderItem={(item)=>(
                      <TouchableOpacity  onPress={() => {
                        this.onLocationChange(item)}
                      }
                      >
                        <Text style={margin1}>{item.city}, {item.state}</Text>
                      </TouchableOpacity>
                    )
                    }
                  />

                  <Picker
                    selectedValue="java"
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                    >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>

                  selectedValue="java"
                  style={{ height: 50, width: 100 }}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                  >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                  Object.values(itinerary).map((itinerary, index) => <ItineraryCard
                    key={index}
                    itinerary={itinerary}
                    number={index}
                    isLogin={isLogin}
                    navigation={navigation}
                    elevation={3}
                    //style={style.containerCard}
                    onPreviewClicked={props.onPreviewClicked}
                    onDeleteClicked={props.onDeleteClicked}
                  />)</View>

                  <Picker
                    // onPress={()=>this.onPickerPress()}
                    selectedValue={this.state.cityId}
                    onValueChange={(itemValue, itemIndex) => this.onSelectItem(itemValue)}
                    itemStyle={input}
                    style={this.cityStyle()}
                    >
                    <Picker.Item label='choose city' value={-1} key={-1} />
                    {Object.values(this.state.jsonGet).map((itemz, index) => <Picker.Item label={itemz.city} value={itemz.id} key={index} />)}
                  </Picker>
                  <Image style={imagap} source={require('../../../assets/icon/expand/expand_button.png')} />*/}
                  <View style={this.state.cityValid ? viewinp : viewinpred}>
                  <TouchableOpacity onPress={() => this.goToCity(navigation)} style={tocha}>
                      <Text style={this.cityStyle()}>{this.state.cityName}</Text>
<Image style={imagap} source={require('../../../assets/icon/expand/expand_button.png')} />

                  </TouchableOpacity>
                  </View>
                  {this.state.cityValid ? null : <Text style={red}>Sorry, you haven't filled this field</Text>}
                <Text style={timePeriod}>
                              Budget
                </Text>
                <View style={this.state.budgetValid ? viewin : viewinred}>
                    <Text style={this.erpeStyle()}>Rp</Text><TextInput value={this.state.budget ? String(this.state.budget) : null} placeholderTextColor='#e0e0e0' placeholder="" style={textin} multiline={false} underlineColorAndroid="transparent" onChangeText={(budget) => this.onBudgetChange(budget)} keyboardType='numeric' />
                    <Text style={{ position: 'absolute', top: 8, right: 0, justifyContent: 'center', alignItems: 'center', fontSize: 12, color: '#bdbdbd'}}>/person</Text>
                </View>
                {this.state.budgetValid ? null : <Text style={red}>Sorry, you haven't filled this field</Text>}
                <Text style={timePeriod}>
                  Itinerary Start
                </Text>
                <View style={this.state.startValid ? viewin : viewinred}>
                  <TouchableOpacity onPress={() => this.goToDate(navigation,true)} style={tocha}>
                      <Text style={this.startStyle()}>{this.state.start}</Text>
<Image style={imaga} source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')} />

                  </TouchableOpacity>

                </View>
                {this.state.startValid ? null : <Text style={red}>Sorry, you haven't filled this field</Text>}
                <Text style={timePeriod}>
                  Itinerary End
                </Text>
                <View style={this.state.endValid ? viewin : viewinred}>
                  <TouchableOpacity onPress={() => this.goToDate(navigation,false)} style={tocha}>

                      <Text style={this.finishStyle()}>{this.state.finish}</Text>
<Image style={imaga} source={require('../../../assets/icon/calendar_2_copy_2017-08-23/drawable-hdpi/calendar_2_copy.png')} />

                  </TouchableOpacity>
                </View>
                {this.state.endValid ? null : <Text style={red}>Sorry, you haven't filled this field</Text>}
                <Text style={timePeriod}>Attraction Category</Text>
                <View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 5}} onPress={() => this.onFilterChange({...this.state.tags, culture: !this.state.tags.culture})}>
                    <View style={this.state.tags.culture ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.culture ? filterTextActive : filterTextPassive}>Culture</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, mountain: !this.state.tags.mountain})}>
                    <View style={this.state.tags.mountain ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.mountain ? filterTextActive : filterTextPassive}>Mountain</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, museum: !this.state.tags.museum})}>
                    <View style={this.state.tags.museum ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.museum ? filterTextActive : filterTextPassive}>Museum</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 5}} onPress={() => this.onFilterChange({...this.state.tags, outdoors: !this.state.tags.outdoors})}>
                    <View style={this.state.tags.outdoors ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.outdoors ? filterTextActive : filterTextPassive}>Outdoors</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, hidden_paradise: !this.state.tags.hidden_paradise})}>
                    <View style={this.state.tags.hidden_paradise ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.hidden_paradise ? filterTextActive : filterTextPassive}>Hidden Paradise</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, beaches: !this.state.tags.beaches})}>
                    <View style={this.state.tags.beaches ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.beaches ? filterTextActive : filterTextPassive}>Beaches</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 5, marginBottom: 5, flexDirection: 'row'}}>
                  <TouchableOpacity style={{marginRight: 5}} onPress={() => this.onFilterChange({...this.state.tags, history: !this.state.tags.history})}>
                    <View style={this.state.tags.history ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.history ? filterTextActive : filterTextPassive}>History</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, wildlife: !this.state.tags.wildlife})}>
                    <View style={this.state.tags.wildlife ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.wildlife ? filterTextActive : filterTextPassive}>Wildlife</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5, marginLeft: 5}} onPress={() => this.onFilterChange({...this.state.tags, amusement: !this.state.tags.amusement})}>
                    <View style={this.state.tags.amusement ? filterButtonActive : filterButtonPassive}>
                      <Text style={this.state.tags.amusement ? filterTextActive : filterTextPassive}>Amusement</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
              <TouchableOpacity style={buttonGene} onPress={() => {this.submita(navigation)}}>
                <Text style={generateText}>GENERATE ITINERARY</Text>
              </TouchableOpacity>
            </View>
            <Modal
              isOpen={this.state.isOpen}
              onClosed={() => this.setState({ isOpen: false })}
              ref="modal1"
              style={modal}
              postion="center"
            >
              <View style={bar} />
              <View style={dateShow}>
                <Text style={day}>{start.format('DD')}</Text>
                <Text style={month}>{start.format('MMMM')}</Text>
                <Text style={year}>{start.format('YYYY')}</Text>
              </View>
              <Calendar
                current={start.format('YYYY-MM-DD')}
                minDate={now.format('YYYY-MM-DD')}
                onDayPress={(day) => { this.onStartDateChange(day) }}
                theme={{
                              textDayFontSize: 12,
                              textMonthFontSize: 12,
                              textDayHeaderFontSize: 12,
                          }}
              />
            </Modal>
            <Modal
              isOpen={this.state.isOpen}
              onClosed={() => this.setState({ isOpen: false })}
              ref="modal2"
              style={modal}
              postion="center"
            >
            {
                /*
                <View style={bar} />
                <View style={dateShow}>
                  <Text style={day}>{finish.format('DD')}</Text>
                  <Text style={month}>{finish.format('MMMM')}</Text>
                  <Text style={year}>{finish.format('YYYY')}</Text>
                </View>
                <Calendar
                  minDate={start.format('YYYY-MM-DD')}
                  current={finish.format('YYYY-MM-DD')}
                  onDayPress={(day) => { this.onEndDateChange(day) }}
                  theme={{
                                textDayFontSize: 12,
                                textMonthFontSize: 12,
                                textDayHeaderFontSize: 12,
                            }}
                />
                */
            }

            </Modal>
          </ScrollView>
        </View>
      )
    }
}
const d = Dimensions.get('window')
const input = {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
}
const filterButtonPassive = {
  paddingRight: 14,
  paddingLeft: 14,
  height: 31.3,
  borderRadius: 1.7,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor: "#e0e0e0",
  // fontSize: 13,
}
const filterButtonActive = {
  paddingRight: 14,
  paddingLeft: 14,
  height: 31.3,
  borderRadius: 1.7,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor: "#27ae60",
  // fontSize: 13,
}
const red = {
    color: '#e74c3c',
    fontSize:12,
    letterSpacing: 0.68,
    fontFamily: 'Lato-Regular'
}
const filterTextActive = {
  fontFamily: "Lato-Regular",
  fontSize: 13.3,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0.36,
  textAlign: "left",
  color: "#ffffff"
}
const filterTextPassive = {
  fontFamily: "Lato-Regular",
  fontSize: 13.3,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0.36,
  textAlign: "left",
  color: "#616161"
}

const wonderfull = {
  marginTop: 25,
  marginBottom: 11,
  fontFamily: 'MarkPro',
  fontSize: 24.2,
  letterSpacing: 0.1,
  textAlign: 'center',
  color: '#27ae60',
}
const bar = {
  backgroundColor: '#16a085',
  height: d.height * 0.03,
}

const day = {
  fontSize: 70,
  color: 'white',
}

const month = {
  fontSize: 25,
  color: 'white',
}

const year = {
  fontSize: 25,
  color: 'white',
}

const dateShow = {
  backgroundColor: '#1abc9c',
  alignItems: 'center',
}
const viewin = {
  flexDirection: 'row',
  // backgroundColor: '#eeeeee',
  // height: 35,
  borderBottomColor: '#e0e0e0',
  borderBottomWidth: 1.3,
  // flex: 1,
}
const viewinred = {
    flexDirection: 'row',
    borderBottomColor: '#e74c3c',
    borderBottomWidth: 1.3,
}
const viewinp = {
  borderBottomColor: '#e0e0e0',
  borderBottomWidth: 1.3,
  // backgroundColor: '#dddddd'
  // flex: 1,
}
const viewinpred = {
  borderBottomColor: '#e74c3c',
  borderBottomWidth: 1.3,
}
const budgetin = {
    flexDirection: 'row',
}
// const erpe =
const textin = {
    padding:0,
  height: 35,
  fontFamily: 'Lato-Regular',
  fontSize: 20,
  flex:1,
  lineHeight: 30,
}
const modal = {
  height: d.height * 0.85,
  width: d.width * 0.7,
}
const parent = {
  flex: 1,
}
const container1 = {
  // marginTop: d.height * 0.1,
  backgroundColor: '#ffffff',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
const container2 = {
  width: d.width * 0.8,
}
const margin2 = {
  marginBottom: 20,
}
const margin1 = {
  fontFamily: 'Poppins-Regular',
  fontSize: 20,
}
// const date =
const setrip = {
  fontFamily: 'Poppins-Regular',
  fontSize: 30,
  marginRight: 10,
  marginLeft: 10,
}
const container3 = {
  // marginTop: 5,
  flexDirection: 'row',
  alignSelf: 'stretch',
  // width: d.width * 0.8,
}
const budget = {
  letterSpacing: 0.08,
  color: '#27ae60',
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  marginTop: 10,
}
const timePeriod = {
  // marginBottom: -7,
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  color: '#27ae60',
  marginTop: 17,
}
const cityDestination = {
  marginTop: 30,
  // marginBottom: -10,
  // marginLeft: 3,
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.08,
  color: '#27ae60',
}
const enjoyYourTour = {
  fontFamily: 'Poppins-Regular',
  fontSize: 39.3,
  fontWeight: 'bold',
  letterSpacing: 0.2,
  textAlign: 'left',
  color: '#27ae60',
}
const buttonGene = {
  backgroundColor: '#27ae60',
  borderRadius: d.height * 0.07 / 2,
  width: d.width * 0.8,
  height: d.height * 0.07,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 25,
  marginBottom: 25,
}
const generateText = {
  color: 'white',
  fontFamily: 'Poppins-Medium',
  fontSize: 15,
  // fontWeight: 'bold',
  letterSpacing: 0.86,
}
const tocha = {flex:1}
const imaga = { height: 16, resizeMode: 'contain', position: 'absolute', top:9, right: 0}
const imagap = { height: 5, resizeMode: 'contain', position: 'absolute', top:18, right: 0}
const autoCompleteContainer = {
  flex: 1,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 1
}
