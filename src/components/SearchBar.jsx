import React from 'react'
import { TextInput, View, StyleSheet } from "react-native"
import { FontAwesome }  from "@expo/vector-icons"

const SearchBar = () => {
    return (
        <View style={styles.bg}>
            <FontAwesome style={styles.icon} name="search"/>
            <TextInput style={styles.textIns}
            placeholder="What do you want to eat? "
            placeholderTextColor= '#000000'
            />
            <FontAwesome style={styles.icon2} name="microphone"/>
        </View>
    )
}

const styles = StyleSheet.create({
    bg:{
        marginTop: 15,
        backgroundColor: "#9E9E9E",
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
    }
})

export default SearchBar