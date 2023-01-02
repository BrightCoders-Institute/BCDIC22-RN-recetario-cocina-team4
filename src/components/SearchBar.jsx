import React from 'react'
import { TextInput, View, StyleSheet } from "react-native"
import { FontAwesome }  from "@expo/vector-icons"
import Constants from 'expo-constants'


const SearchBar = () => {
    return (
        <View style={styles.bg}>
            <FontAwesome style={styles.icon} name="search"/>
            <TextInput style={styles.textIns}
            placeholder="What do you want to eat? "
            placeholderTextColor= '#fff'
            />
            <FontAwesome style={styles.icon2} name="microphone"/>
        </View>
    )
}

const styles = StyleSheet.create({
    bg:{
        marginTop: 15,
        backgroundColor: "#4e4a4a",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBotton: 10
    },
    icon: {
        fontSize: 22,
        alignSelf: "center",
        marginHorizontal: 10,
        color: 'white'
    },
    textIns: {
        flex: 1,
        fontSize: 22,
        alignSelf: "center",
        marginHorizontal: 10,
    },
    icon2: {
        fontSize: 25,
        alignSelf: "center",
        marginHorizontal: 10,
        color: 'white'
    }
})

export default SearchBar