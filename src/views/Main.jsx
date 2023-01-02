import React from "react";
import { Text, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar.jsx'
import ListItem from '../components/ListItem.jsx'

const Main = ({ item, navigation }) => {
    return (
        <SafeAreaView style={{ flexGrow: 1, backgroundColor: '#2C2C2C', flex: 1}}>
            <StatusBar barStyle='light-content'/>
            <SearchBar />
            <ListItem 
            navigation = {navigation} 
            item = {item}/>
            
        </SafeAreaView>
    )
}

export default Main