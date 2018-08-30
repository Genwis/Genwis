
import React, { Component } from 'react'
import { Dimensions, View, StatusBar, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Axios from 'axios'
import StarRating from 'react-native-star-rating'

export default class DetailSearchDetail extends Component {
  render() {
    const { search, navigation } = this.props
    //const attrid = navigation.getParam('attrId', 'test');
    console.log('receive')
    console.log(navigation.attrId)
    console.log(this.props.navigation.state.params)
    console.log(this.props)
    return (
      <View>
        <Text>{this.props.navigation.getParam}</Text>
      </View>
    )
  }
}
