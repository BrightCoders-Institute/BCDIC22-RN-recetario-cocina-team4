import React, { Component } from 'react'
import {View, Text, FlatList, Image, TouchableHighlight} from 'react-native'
import { dbinfo } from '../data/dbinfo.json'

export default class ListItem extends Component{

    renderRecipes = ({item}) => {
        return(
            <TouchableHighlight>
                <View>
                    <Image source={{uri: item.imageURL}} />
                    <Text>{item.name}</Text>
                    <Text>{}</Text>
                </View>
            </TouchableHighlight>
        )
    }


    render() {
        return (
            <View>
                <FlatList
                data={dbinfo}
                renderItem={(this.renderRecipes)}
                keyExtractor={item => item.name} 
                />
            </View>
        )
    }
}