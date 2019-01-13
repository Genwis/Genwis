/**
* Created by iampamungkas on 2/13/18.
*/
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, TextInput, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import Axios from 'axios'
import StarRating from 'react-native-star-rating'
import { selectDetail, idS } from '../../../actions/actions'
import Ionicons from 'react-native-vector-icons/Ionicons'

const d = Dimensions.get('window')

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    searchinput: {
        borderWidth: 0,
        padding: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 0,
        shadowOpacity: 0,
    },
    imageThumbnail: {
        width: d.width * 100 / 360,
        height: d.height * 90 / 616,
        backgroundColor: '#eeeeee',
        borderRadius: 3.3,
        marginRight:17,
    },
    tagz:{
        marginRight: 10,
        marginLeft: 10
    }
})

export default class CityPickerScreens extends Component {

    constructor(props) {
        super(props);
        // console.log(props)
        // this.setState({ ...this.state, nav: })
        //this.sesuatu = this.sesuatu.bind(this);

    }

    state = {
        keyword: '',
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
        jsonGet: '',
        nav: '',
    }
    // componentWillReceiveProps(nextProps){
    //   // if(nextProps.someValue!==this.props.someValue){
    //   //   //Perform some operation
    //   //   this.setState({someState: someValue });
    //   //   this.classMethod();
    //   // }
    //   console.log(nextProps)
    //    this.setState({ ...this.state, navigation: nextProps.navigation, detail: nextProps.detail})
    // }
    componentWillReceiveProps=(nextProps)=>{
    // console.log("componentWillReceiveProps");
}
    componentDidMount() {
        // Axios.get(`http://api.generatorwisata.com/api/locations/like?key=jak${keyword}`, { headers })
        Axios.get(`http://api.generatorwisata.com/api/locations/like`)
        .then((response) => {
            //this.setState({ ...this.state, autocomplete: response.data})
            this.setState({ ...this.state, jsonGet: response.data})
            // console.log(this.state.jsonGet)
            // console.log("inij: ",response.data)
        })
        .catch((err) => {
            // console.log(err)
        })
    }
    onKeywordChange = (keyword) => {

        const headers = {
            Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
            'Content-Type': 'text/plain',
        }
        Axios.get(`http://api.generatorwisata.com/api/locations/like?key=${keyword}`, { headers })
        .then((response) => {
            //this.setState({ ...this.state, autocomplete: response.data})
            this.setState({ ...this.state, jsonGet: response.data})
            // console.log(this.state.jsonGet)
            // console.log("inij: "+this.state.jsonGet)
        })
        .catch((err) => {
            // console.log(err)
        })
    }
    fungsi = ({item, index}) => {
        let noa = item.number_of_attractions==1 ? "attraction" : "attractions"
        return(

        <TouchableOpacity key={index} onPress={()=>{this.onPressItem(item.id,item.city)}}>
        <View style={viewrender}>
        <Text style={citytext}>{item.city}, {item.state}</Text>
        <Text style={noat}>{item.number_of_attractions} {noa}</Text>
        </View></TouchableOpacity>
    )}
    renderElement = (detail,navigation) => {
        // function fungsi() {
        //   return this.sesuatu()
        // }

        if(this.state.jsonGet == ''||this.state.jsonGet == null||this.state.jsonGet == undefined){
            return <Text> </Text>;
        }else {
            // return <View>{this.state.jsonGet.map(((d, idx)=>this.fungsi(d, idx)))}</View>;
            return <FlatList
            style={flatlis}
            data={this.state.jsonGet}
            renderItem={this.fungsi}
            onEndReached = { this.handLoadMore }
onEndReachedThreshold = { 10 }
initialNumToRender= {5}
            keyExtractor={(item, index) => index.toString()}
            />;
        }
        return null;
    }

    onPressItem = (id,city) => {
        const nextState = this.props.detail
        // console.log(nextState)
        nextState.location_id = id
        nextState.cityName = city
        this.props.dispatch(selectDetail(nextState))

        // console.log('CITY PICKER SCREEEEEN')

        this.props.navigation.pop(2)
        this.props.navigation.push("DetailNavigation")

// navigation.navigate("DetailNavigation")
        // console.log(navigation)
        // navigation.goBack(navigation.state.params.go_back_key)
// navigation.state.params.onNavigateBack('hhh')
        // navigation.goBack(null);
        // navigation.state.params.onSelect({ cityName: 'Bandung', location_id : 'locid' });
    }

    render() {
        const { detail, navigation } = this.props

        // console.log('props citypicker',this.props.detail)
        return (
            <View style={style.container}>
            <StatusBar backgroundColor="#229854" />
            <TextInput placeholder="Search City Here" style={style.searchinput} onChangeText={(keyword) => this.onKeywordChange(keyword)} elevation={4} underlineColorAndroid='rgba(0,0,0,0)'/>

            <Ionicons name="ios-search" style={ioni} />
            {
                // this.renderElement(this.props.navigation)
                /*
                <TouchableOpacity  onPress={() => {
                  this.onPressItem(this.props.detail,this.props.navigation)}
                }
                ><Text>click here</Text>
              </TouchableOpacity>
                */
                this.renderElement(detail,navigation)

            }


            </View>
        )
    }
}
const viewrender ={borderBottomColor:'#e0e0e0',borderBottomWidth:1,paddingTop:19,paddingBottom:15}
const citytext = {fontFamily: 'Poppins-Medium',fontSize: 16,letterSpacing:0.91,color: '#424242'}
const noat = {fontFamily: 'Lato-Regular',fontSize: 12,letterSpacing:0.32,color: '#9e9e9e'}
const ioni = { fontSize: 25, color: '#27ae60',elevation: 12,
width: 40,
height: 40,
position: 'absolute',
top: 18,
right: 0,
alignItems: 'center',
justifyContent: 'center',
zIndex: 39, }
const flatlis = {
    paddingLeft: 25,
    paddingRight: 25,
}
const filterButtonPassive = {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 11,
    paddingBottom: 11,
    height: 31.3,
    borderRadius: 1.7,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "#e0e0e0"
}
const filterButtonActive = {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 11,
    paddingBottom: 11,
    height: 31.3,
    borderRadius: 1.7,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "#27ae60"
}
const filterTextActive = {
    fontFamily: "Lato",
    fontSize: 13.3,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textAlign: "left",
    color: "#ffffff"
}
const filterTextPassive = {
    fontFamily: "Lato",
    fontSize: 13.3,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textAlign: "left",
    color: "#616161"
}
const view1 = {marginBottom:17,borderBottomColor: '#e0e0e0',borderBottomWidth: 1,paddingBottom:17,flexDirection:'row'}
const view2 = {flex:1,justifyContent:'space-between'}
const attname = {color: '#424242',letterSpacing:0.04,fontSize: 16,fontFamily:'Poppins-Medium'}
const citystate = {color: '#bdbdbd', fontSize: 12,fontFamily:'Lato-Regular',letterSpacing:0.32}
const view3 = {flexDirection: 'row',justifyContent:'space-between'}
const view4 = {flexDirection:'row',alignItems:'center',justifyContent:'center'}
const star = {color:'#ffcd00'}
const harga = {color:'#27ae60',letterSpacing:0.36,alignSelf: 'flex-end',fontSize:13,letterSpacing:0.36}
