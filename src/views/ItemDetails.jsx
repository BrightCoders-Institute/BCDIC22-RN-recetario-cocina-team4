import { SharedElement } from 'react-navigation-shared-element'
import { View, Text, Button, Image } from 'react-native'
import ListItem from '../components/ListItem.jsx'
import Constants from 'expo-constants'
import React from 'react'

const ItemDetails = ({ route, navigation }) => {
    const { title, size, ingredients, name, imageURL } = route.params
    console.log(name, imageURL)
    return (
        <View style={{ marginTop: Constants.statusBarHeight}}>
            
            <View>
                <Text style={{textAlign:"center"}}>Recipe Screen</Text>
                <Image source={{ uri: imageURL}} style={{width:300, height:300, alignSelf:"center"}}/>
                <Text style={{textAlign:"center"}}>{title}</Text>
                <Text style={{textAlign:"center"}}>{name}</Text>
                <Text style={{textAlign:"center", fontSize:20}}>Ingredients</Text>
                <Text style={{textAlign:"center"}}>for {size}</Text>
                <Text style={{textAlign:"center"}}>{ingredients[0].name}</Text>
                <Text style={{textAlign:"center"}}>{ingredients[0].quantity}</Text>
            </View>

            <Button title='Close' onPress={ () => { navigation.pop() }} />
        </View>
    )
    
}
export default ItemDetails;