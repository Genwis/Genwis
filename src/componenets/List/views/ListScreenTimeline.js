/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { Dimensions, Text, View} from 'react-native'
import bulan from '../../../helper/month';
export default class ListScreenTimeline extends Component {
    render(){
        const timeline = this.props.Day.time_line
        return(
            <View style={container1}>
                <View style={container3}>
                    <View style={stylePadJam}>
                        <Attr timeline={timeline} />
                    </View>
                </View>
            </View>
        )
    }
}
function Meniter(jm,mn,mnn){
	let tmnt = mn+mnn;
	let mnts = tmnt%60;
	let jms = (jm+(tmnt/60)).toFixed(0);

	return ((jms < 10) ?
									<Text style={Jam}>
									0{jms}.{(mnts<10)?<Text style={Jam}>0{mnts}</Text>:<Text style={Jam}>{mnts}</Text>}
									</Text>
									:
									<Text style={Jam}>{jms}.{(mnts<10)?<Text style={Jam}>0{mnts}</Text>:<Text style={Jam}>{mnts}</Text>}								
									</Text>);
}
function Attr(timeline) {

    const showTime = Object.values(timeline).map(function (isi,id) {
        if (isi) {
            const timeShow = isi.map(function (val,n) {
				
                return(
                    <View key={n} style={container4}>
                        <Text style={attraction}>
                            {val.todo.name}{"\n"}
                        </Text>
                        <Text>
                            
                                {
                                    (val.start.jam < 10) ?
									<Text style={Jam}>
									0{val.start.jam}.{(val.start.menit<10)?<Text style={Jam}>0{val.start.menit}</Text>:<Text style={Jam}>{val.start.menit}</Text>}
									</Text>
									:
									<Text style={Jam}>{val.start.jam}.{(val.start.menit<10)?<Text style={Jam}>0{val.start.menit}</Text>:<Text style={Jam}>{val.start.menit}</Text>}								
									</Text>
									
                                }
								{
									" - "
								}
								{
									Meniter(val.start.jam,val.start.menit,val.todo.recommended_duration)
								}
                            
                                {
                                    (val.todo.RecommendedDuration) ? <Text>Recommended Duration: {val.todo.RecommendedDuration}</Text> : false
                                }
                            
                        </Text>
                    </View>
                )
            })
            return(<View key={id}>{timeShow}</View>)
        }
    })
    return(<View>{showTime}</View>)
}
const d = Dimensions.get("window")
const container1 = {
    width: d.width * 265/360,
    /*marginTop: 15,
    marginBottom: 15,*/
}
const container2 = {
    backgroundColor: "#2ecc71",
    height: 40,
}
const container3 = {
    flex:1,
    /*backgroundColor: "#ecf4f5"*/
}
const container4 = {
    marginLeft: 20,
	marginRight: 70,
    marginTop: 15

}
const attraction = {
    fontFamily: "MarkPro",
    fontSize: 14,
    letterSpacing: 0,
    color: "#5c5c5c",
	lineHeight: 24
}
const Days = {
    marginLeft: 5,
    marginTop: 6,
    fontFamily: "Ubuntu",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.06,
    color: "#fefefe"
}
const Jam = {
    fontFamily: "Campton-Book",
    fontSize: 12,
    letterSpacing: 0.06,
    color: "#757575",
	lineHeight: 10
}
const stylePadJam = {
    /*marginTop: d.width * 7/360,
    marginLeft: d.width * 7/360,
    marginRight: d.width * 7/360,*/
    marginBottom: 30/*d.width * 7/360*/
}