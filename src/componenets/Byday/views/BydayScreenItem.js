/**
 * Created by iampamungkas on 9/12/17. test
 */
import React, { Component } from 'react'
import { View, Image, Text, Dimensions, ScrollView } from 'react-native'
import Modal from 'react-native-modalbox'
import moment from 'moment'
import StarRating from 'react-native-star-rating'
const d = Dimensions.get('window')
export default class BydayScreenItem extends Component {
  constructor(props) {
    super(props)
  }
    state = {
      isOpen: false,
    }
    render() {
      const { event } = this.props
      const start = moment.parseZone(event.start)
      const finish = moment.parseZone(event.end)
      return (
        <ScrollView style={parent} contentContainerStyle={{
          alignItems: 'center',
        }}>
          <View style={container}>
            {event.attraction.photo != null ?
              <Image
                source={{ uri: event.attraction.photo[0] }}
                style={{
                  height: 150,
                  borderRadius: 5
                }}
                resizeMode='cover'
              />
              :
              <View style={{
                height: 150,
                width: 150,
              }}
              />

            }
            <View style={row1}>
              <Text style={{...AttractionsName, color: "#616161"}}>{event.attraction.name}</Text>
            </View>
            <View style={row1}>
              <Text style={{...EventTime, color: "#616161"}}>  {start.format('HH.mm')} - {finish.format('HH.mm')}</Text>
            </View>
            <View style={row1}>
              <Text style={Vicinity} ELLIPSIZEMODE="tail" numberOfLines={1} >  {event.attraction.vicinity}</Text>
            </View>
            <View style={row1}>
              <Text style={{...Vicinity, color: "#27ae60"}} ELLIPSIZEMODE="tail" numberOfLines={1} >  {event.attraction.phone_number}</Text>
            </View>
            <View style={line1} />
            <View style={RatingandPrice}>
              <StarRating
                disabled
                maxStars={5}
                rating={event.attraction.rating}
                fullStarColor={'#ffef00'}
                starSize={16}
                containerStyle={{marginTop: 18}}
              />
              <View style={VerLine} />
              <Text style={PriceText}>     Price  IDR {event.attraction.price}</Text>
            </View>
            <View style={line2} />
            <Text style={Description} ELLIPSIZEMODE="tail" numberOfLines={4} onPress={() => this.refs.modal1.open()}>{event.attraction.description}</Text>
            <View style={line3} />
          </View>
          <Modal
            isOpen={this.state.isOpen}
            onClosed={() => this.setState({ isOpen: false })}
            ref="modal1"
            style={modal}
            postion="center"
          >
            <ScrollView>
              <View style={{ marginLeft: 60, marginRight: 10 }}>
                <Text style={AttractionsName}>{event.attraction.name}</Text>
                <Text style={ModalDescription}>{event.attraction.description}</Text>
              </View>
            </ScrollView>
          </Modal>
        </ScrollView>
      )
    }
}

const dimension = Dimensions.get('window')

const sizeIcon = {
  marginTop: 4,
  width: 12.7,
  height: 14,
  resizeMode: 'contain',
}

const VerLine = {
  width: 1.3,
  height: 50,
  backgroundColor: '#27ae60',
}
const line1 = {
  marginTop: 21,
  height: 1.3,
  backgroundColor: '#27ae60',
}
const line2 = {
  height: 1.3,
  marginBottom: 22,
  backgroundColor: '#27ae60',
}
const line3 = {
  height: 1.3,
  marginTop: 21,
  marginBottom: 100,
  backgroundColor: '#27ae60',
}
const row1 = {
  flexDirection: 'row',
  marginBottom: 5,
}
const PriceText = {
  marginTop: 15,
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  letterSpacing: 0.08,
  color: '#27ae60',
}
const RatingText = {
  marginTop: 15,
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  letterSpacing: 0.08,
  color: '#27ae60',
}
const modal = {
  height: dimension.height * 0.7,
}
const parent = {
  width: dimension.width,
}
const container = {
  width: dimension.width * 0.8,
}
const RatingandPrice = {
  flexDirection: 'row',
  width: 290,
}
const ImageStyle = {
  width: 240,
  height: 170,
  resizeMode: 'contain',
}
const ImageStyleModal = {
  width: 240,
  height: 170,
}
const AttractionsName = {
  fontFamily: 'Poppins-Regular',
  fontSize: 18,
  letterSpacing: 0.06,
  color: '#27ae60',
}
const EventTime = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.06,
  color: '#bcc2c3',
}
const Vicinity = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.06,
  color: '#bcc2c3',
}
const Description = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.06,
  textAlign: 'auto',
  color: '#b7bdbe',
}
const ModalDescription = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  letterSpacing: 0.06,
  textAlign: 'justify',
}
