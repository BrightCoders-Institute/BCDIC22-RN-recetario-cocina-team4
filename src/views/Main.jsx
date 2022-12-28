import React from "react";
import { Text, View, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import SearchBar from '../components/SearchBar.jsx'
import ListItem from '../components/ListItem.jsx'

const Main = ({ item, navigation }) => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1, backgroundColor: '#2C2C2C', flex: 1}}>
            <SearchBar />
            <ListItem 
            navigation = {navigation} 
            item = {item}/>
            
        </View>
    )
}

export default Main