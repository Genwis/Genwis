/**
 * Created by iampamungkas on 9/11/17.
 */
'use strict';
import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'

export default class BydayScreen extends Component {
    render(){
        const { items } = this.props.items
        return(
            <ScrollView horizontal={true}>
                <ItemList items={items}/>
            </ScrollView>
        )
    }
}

function ItemLIst(items) {

    const Item = Object.values(timeline).map(function (isi,id){

    })
    return(<View>{Item}</View>)
}