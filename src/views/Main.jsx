import React from "react";
import { Text, View } from 'react-native'
import Constants from 'expo-constants'
import SearchBar from '../components/SearchBar.jsx'

const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <SearchBar />
        </View>
    )
}

export default Main