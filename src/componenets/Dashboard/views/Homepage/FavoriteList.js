/**
* Created by iampamungkas on 2/18/18.
*/
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'
import { AttractionCard } from './AttractionItems/AttractionCard'


const d = Dimensions.get('window')
const style = StyleSheet.create({
    containerScroll: {
        padding: 20,
        flex: 1,
    },
    containerCard: {
        flex: 1,
        // borderRadius: 2,
        width: d.width * 200 / 360,
        // backgroundColor: '#eeeeee',
        marginRight: 20,
        // shadowColor: '#eeeeee',
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // shadowRadius: 0,
        // shadowOpacity: 0,
        margin:5,
    },
    view:{marginBottom:20},
})

export const FavoriteList = (props) => {
    const { itinerary, favlist, dispatch, navigation } = props
    // const {  favlist } = props
    // console.log("favorite")
    /*
    <View style={style.containerCard} elevation={3}>
    <AttractionCard/>
    </View>
    <View style={style.containerCard} elevation={3}>
    <AttractionCard/>
    </View>
    <View style={style.containerCard} elevation={3}>
    <AttractionCard/>
    </View>
    <View style={style.containerCard} elevation={3}>
    <AttractionCard/>
    </View>
    */

    // renderAttraction = () => {
    //     let listz = []
    //     // console.log('attr itinerary',itinerary)
    //     // list.push(<Text>first</Text>)
    //     // console.log('favlist',itinerary)
    //     // console.log('this is fav',favlist)
    //     if(favlist!=null&&favlist.length!=0){
    //         let counter = 0
    //         for (aitem of favlist) {
    //             counter++
    //         // for (item of favlist) {
    //
    //         listz.push(<View key={counter} style={style.containerCard}>
    //           <AttractionCard navigation={navigation} dispatch={dispatch} itinerary={itinerary} image={aitem.attraction.photo[0]} name={aitem.attraction.name} id={aitem.attraction.id} price={aitem.attraction.price} location={aitem.location.city+', '+aitem.location.state+', '+aitem.location.country}/>
    //         </View>)
    //         // listz.push(<Text>Hell</Text>)
    //         }
    //     }
    //
    //     return(
    //         <ScrollView horizontal style={style.containerScroll} showsHorizontalScrollIndicator={false}>
    //         {listz}
    //         </ScrollView>
    //     )
    // }

    renderAttraction = ({item,index}) => {
        let image
        if(item.attraction.photo){
            image = item.attraction.photo[0]
        }else{
            image = '../../../../assets/Tempat/default.png'
        }

        return (
            <AttractionCard navigation={navigation} dispatch={dispatch} itinerary={itinerary} image={image} name={item.attraction.name} id={item.attraction.id} price={item.attraction.price} location={item.location.city+', '+item.location.state+', '+item.location.country}/>
        )
    }
    return (
        <View style={style.view}>
        {
            <FlatList
            style={style.containerScroll}
            showsHorizontalScrollIndicator={false}
            data={favlist}
            renderItem={this.renderAttraction}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            />
        }
        </View>
    )
}
