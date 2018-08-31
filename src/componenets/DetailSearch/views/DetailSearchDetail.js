
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image,BackHandler  } from 'react-native'
import Axios from 'axios'
import StarRating from 'react-native-star-rating'

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

handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}
  state = {
    jsonGet: '',
    rp: '',
    deskripsi: '',
    rat: '',
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
        this.setState({ ...this.state, rp: 'Rp'})
        this.setState({ ...this.state, deskripsi: 'Deskripsi'})
        this.setState({ ...this.state, rat: '4.6'})
        console.log(this.state.jsonGet)
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
    console.log('receive')
    return (
      <View style={{backgroundColor:'#ffffff',flex:1}}>
      <ScrollView>
        {this.renderImage()}
        <View style={{padding:25}}>
        <Text style={{letterSpacing:0.74,fontSize:19,color:'#424242',fontFamily:'Poppins-Medium'}}>{this.state.jsonGet.name}</Text>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}><Text style={{color:'#ffcd00'}}>{this.state.rat}{/*this.state.jsonGet.rating*/} </Text>
          <StarRating
            disabled
            maxStars={5}
            rating={parseInt(this.state.rat)/*this.state.jsonGet.rating*/}
            fullStarColor={'#ffcd00'}
            emptyStarColor={'#ffcd00'}
            starSize={12}
          />
        </View>
        <Text style={{color:'#27ae60',letterSpacing:0.38,fontSize:14,fontFamily:'Poppins-Medium'}}>{this.state.rp} {this.state.jsonGet.price}</Text>
        </View>
        <Text style={{lineHeight:18.7,fontSize:14,color:'#757575',fontFamily:'Lato-Regular',letterSpacing:0.38}}>{this.state.jsonGet.vicinity}</Text>
        <Text style={{lineHeight:18.7,fontSize:14,color:'#27ae60',fontFamily:'Lato-Regular',marginTop:5}}>{this.state.jsonGet.phone_number}</Text>
        <Text style={{color:'#424242',fontFamily:'Poppins-Medium',marginTop:20}}>{this.state.deskripsi}</Text>
        <Text style={{fontFamily:'Lato-Regular',fontSize:12.7,lineHeight:18.7,letterSpacing:0.34}}>{this.state.jsonGet.description}</Text>
</View>
        </ScrollView>

      </View>
    )
  }
}
