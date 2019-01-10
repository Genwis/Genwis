
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image,BackHandler  } from 'react-native'
import Axios from 'axios'
import StarRating from 'react-native-star-rating'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

const d = Dimensions.get('window')
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  imageThumbnail: {
    width: d.width,
    height: 221,
    backgroundColor: '#eeeeee',
  }
})

export default class DetailSearchDetail extends Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}
priceChanger = (price) => {
    return String(price).replace(/(.)(?=(\d{3})+$)/g,'$1.')
}
handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}
  state = {
    jsonGet: '',
    rp: '',
    deskripsi: '',
    rat: '',
    price: '',
  }
  componentDidMount() {
    const headers = {
      Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
      'Content-Type': 'text/plain',
    }
    Axios.get(`http://api.generatorwisata.com/api/attraction/${this.props.detail.id}`, { headers })
      .then((response) => {
        //this.setState({ ...this.state, autocomplete: response.data})
        this.setState({ ...this.state, jsonGet: response.data})
        this.setState({ ...this.state, price: response.data.price})
        this.setState({ ...this.state, rp: 'Rp'})
        this.setState({ ...this.state, deskripsi: 'Deskripsi'})
        this.setState({ ...this.state, rat: '4.6'})
        // console.log(this.state.jsonGet)
      })
      .catch((err) => {
        console.log(err)
        this.setState({ ...this.state, deskripsi: "Oops, something is wrong, and it's not your fault"})
      })
  }
  renderImage = () => {
    if(!(this.state.jsonGet.photo==null)){
      return (<Image
        style={style.imageThumbnail}
        source={{uri: this.state.jsonGet.photo[0]}}
      />)
    }else{
      return(<Image style={style.imageThumbnail}/>)
    }
  }
  render() {
    const { search, navigation } = this.props
    //const attrid = navigation.getParam('attrId', 'test');
    // console.log('receive')
    // console.log(this.props)
    return (
      <View style={view1}>
      <TouchableOpacity style={fab} onPress={() => this.props.navigation.goBack(null)}>
        <Icon3 name="arrow-back" style={ico3} />
      </TouchableOpacity>
      <ScrollView>
        {this.renderImage()}
        <View style={view2}>
        <Text style={judul}>{this.state.jsonGet.name}</Text>
        <View style={view3}>
        <View style={view4}><Text style={rating}>{this.state.rat}{/*this.state.jsonGet.rating*/} </Text>
          <StarRating
            disabled
            maxStars={5}
            rating={parseInt(this.state.rat)/*this.state.jsonGet.rating*/}
            fullStarColor={'#ffcd00'}
            emptyStarColor={'#ffcd00'}
            starSize={12}
          />
        </View>
          <Text style={price}>{this.state.rp}{this.priceChanger(this.state.price)}</Text>
        </View>
        <Text style={vicin}>{this.state.jsonGet.vicinity}</Text>
        <Text style={phona}>{this.state.jsonGet.phone_number}</Text>
        <Text style={desk}>{this.state.deskripsi}</Text>
        <Text style={desc}>{this.state.jsonGet.description}</Text>
</View>
        </ScrollView>

      </View>
    )
  }
}
const view1 = {backgroundColor:'#ffffff',flex:1}
const ico3 = { fontSize: 25, color: '#424242' }
const view2 = {padding:25}
const judul = {letterSpacing:0.74,fontSize:19,color:'#424242',fontFamily:'Poppins-Medium'}
const view3 = {flexDirection: 'row',justifyContent:'space-between'}
const view4 = {flexDirection:'row',alignItems:'center',justifyContent:'center'}
const rating = {color:'#ffcd00'}
const price = {color:'#27ae60',letterSpacing:0.38,fontSize:14,fontFamily:'Poppins-Medium'}
const vicin = {lineHeight:20,fontSize:14,color:'#757575',fontFamily:'Lato-Regular',letterSpacing:0.38}
const phona = {lineHeight:18.7,fontSize:14,color:'#27ae60',fontFamily:'Lato-Regular',marginTop:5}
const desk = {color:'#424242',fontFamily:'Poppins-Medium',marginTop:20}
const desc = {fontFamily:'Lato-Regular',fontSize:12.7,lineHeight:20,letterSpacing:0.34}

const fab = {
  elevation: 12,
  width: 40,
  height: 40,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  top: 24,
  left: 24,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 39,
}
