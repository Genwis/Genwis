/**
 * Created by iampamungkas on 9/13/17.
 */
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ListScreenTimeline from './ListScreenTimeline'
import bulan from '../../../helper/month';
export default class ListScreenItems extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { iten, navigation } =  this.props
        let Nday = 0
        const list =  Object.values(iten).map(function (itinerary,index) {
            Nday++
            return ((typeof(itinerary.time_line)==='undefined') ? null :
			
		<View key={index} style={{flexDirection: 'row',flex:1}}>
				<View style={{width:110,paddingLeft:20,paddingRight:20,paddingTop: 15}}>
                    <Text style={{textAlign: 'center',color:"#2ecc71",lineHeight:23,fontFamily:"Campton",fontSize:14}}>{itinerary.waktu.day}</Text>
					<Text style={{textAlign: 'center',color:'#d0d0d0'}}>{bulan(itinerary.waktu.month)}</Text>
				</View>
				<View style={{alignItems: "center"}}>
					<View style={{backgroundColor:(index===0)?"#2ecc71":"#fefefe",borderColor:"#2ecc71",borderWidth:1,borderRadius:100,width:11,height:11,position:"absolute",top:25,zIndex:2}}/>
						
					
					<View style={{flex:1,backgroundColor:"#e0e0e0",width:1,marginTop:(index===0)?25:0}}/>
				</View>
				<View style={{}}>
					<ListScreenTimeline Day={itinerary} Nday={Nday}/>
					</View>
                </View>
            )
        })
        return (<View>{list}</View>)
    }
}