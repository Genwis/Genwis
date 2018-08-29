/**
 * Created by iampamungkas on 2/13/18.
 */
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Axios from 'axios'
import StarRating from 'react-native-star-rating'

const d = Dimensions.get('window')

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  searchinput: {
    borderWidth: 0,
    padding: 20,
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
  },
  tagz:{
     marginRight: 10,
     marginLeft: 10
  }
})
class Card extends Component {
  render() {
    return (
      <View style={{marginBottom:17,borderBottomColor: '#e0e0e0',borderBottomWidth: 1,paddingBottom:17,flexDirection:'row'}}>
      <Image
      style={style.imageThumbnail}
        source={{uri: this.props.image}}
      />
      <View style={{flex:1}}>
      <Text style={{color: '#424242',letterSpacing:0.04,fontSize: 16,paddingBottom:12}} >{this.props.name}</Text>
      <Text style={{color: '#bdbdbd', fontSize: 12, paddingBottom:35}}>{this.props.location}, {this.props.prov}</Text>
      <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',justifyContent:'center'}}><Text>{this.props.star} </Text>
        <StarRating
          disabled
          maxStars={5}
          rating={this.props.star}
          fullStarColor={'#ffef00'}
          starSize={12}
        />
      </View>
      <Text style={{color:'#27ae60',letterSpacing:0.36,alignSelf: 'flex-end'}}>Rp. {this.props.harga}</Text>
      </View>
      </View>
      </View>
    );
  }
}
export default class extends Component {
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
  }
  onKeywordChange = (keyword) => {
    //const nextState = this.props.detail
    console.log(keyword)
    // nextState.budget = parseInt(budget)
    // this.props.dispatch(selectDetail(nextState))
    // this.setState({
    //   ...this.state,
    //   budget,
    const headers = {
      Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
      'Content-Type': 'text/plain',
    }
    Axios.get(`http://api.generatorwisata.com/api/attractions/like?key=${keyword}`, { headers })
      .then((response) => {
        //this.setState({ ...this.state, autocomplete: response.data})
        this.setState({ ...this.state, jsonGet: response.data})
        console.log(this.state.jsonGet)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    renderElement(){
       if(this.state.jsonGet == ''||this.state.jsonGet == null){
          return <Text>nope</Text>;
        }else {
          return <View>{this.state.jsonGet.map(function(d, idx){
            console.log(d.attraction.photo[0])
           return (<Card key={idx} name={d.attraction.name} location={d.location.city} star={d.attraction.rating} harga={d.attraction.price} prov={d.location.state} image={d.attraction.photo[0]}/>)
         })}</View>;
        }
       return null;
    }
  render() {
    const { search, navigation } = this.props
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#229854" />
        <TextInput placeholder="Search Place Here" style={style.searchinput} onChangeText={(keyword) => this.onKeywordChange(keyword)} elevation={4} underlineColorAndroid='rgba(0,0,0,0)'/>
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{marginTop: 14, marginBottom: 14, flexDirection: 'row', marginLeft: 9}}>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, culture: !this.state.tags.culture})}>
            <View style={this.state.tags.culture ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.culture ? filterTextActive : filterTextPassive}>Culture</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, mountain: !this.state.tags.mountain})}>
            <View style={this.state.tags.mountain ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.mountain ? filterTextActive : filterTextPassive}>Mountain</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, museum: !this.state.tags.museum})}>
            <View style={this.state.tags.museum ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.museum ? filterTextActive : filterTextPassive}>Museum</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, outdoors: !this.state.tags.outdoors})}>
            <View style={this.state.tags.outdoors ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.outdoors ? filterTextActive : filterTextPassive}>Outdoors</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, hidden_paradise: !this.state.tags.hidden_paradise})}>
            <View style={this.state.tags.hidden_paradise ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.hidden_paradise ? filterTextActive : filterTextPassive}>Hidden Paradise</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, beaches: !this.state.tags.beaches})}>
            <View style={this.state.tags.beaches ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.beaches ? filterTextActive : filterTextPassive}>Beaches</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, history: !this.state.tags.history})}>
            <View style={this.state.tags.history ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.history ? filterTextActive : filterTextPassive}>History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, wildlife: !this.state.tags.wildlife})}>
            <View style={this.state.tags.wildlife ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.wildlife ? filterTextActive : filterTextPassive}>Wildlife</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.tagz} onPress={() => this.onFilterChange({...this.state.tags, amusement: !this.state.tags.amusement})}>
            <View style={this.state.tags.amusement ? filterButtonActive : filterButtonPassive}>
              <Text style={this.state.tags.amusement ? filterTextActive : filterTextPassive}>Amusement</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
        <ScrollView>
          <View style={{marginTop: 5, marginBottom: 5, marginLeft:20, marginRight: 20}} >{ this.renderElement() }</View>
        </ScrollView>

      </View>
    )
  }
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
