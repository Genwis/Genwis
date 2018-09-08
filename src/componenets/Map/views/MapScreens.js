/**
 * Created by iampamungkas on 10/17/17.
 */
import React, { Component } from 'react'
import { Dimensions, View, Text } from 'react-native'
import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default class MapScreens extends Component {
    state = {
      region: {
        latitude: -6.9175,
        longitude: 107.6191,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    }
    mapStyle = [
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ]
    onRegionChange = (region) => {
      this.setState({
        region,
      })
    }
    /*
    <MapView
      liteMode
      provider="google"
      initialRegion={this.state.region}
      onRegionChange={this.onRegionChange}
      style={map}
      scrollEnabled
      zoomEnabled
      pitchEnabled={false}
      rotateEnabled={false}
    />
    */
    render() {
      console.log('mapscreen props')
      console.log(this.props)
      return (
        <View style={container}>
          <Text>Som</Text>
          <MapView

            provider="google"
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange}
            style={map}
            draggable
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
          />
        </View>
      )
    }
}
const container = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
}
const map = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
