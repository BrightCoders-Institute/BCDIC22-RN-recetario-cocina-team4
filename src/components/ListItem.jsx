import React from 'react'
import { StatusBar } from "expo-status-bar"
import { View, Text, FlatList, Image, TouchableHighlight, SectionList, SafeAreaView, StyleSheet } from 'react-native'
import dbinfo from '../data/dbinfo.json'

const ListItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image 
                source={{uri: item.imageURL}}
            style={styles.itemPic}
            resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    )
}

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <SafeAreaView style={{ flex: 1 }}>
                <SectionList 
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    stickySectionHeadersEnabled={false}
                    sections={dbinfo}
                    renderSectionHeader={({ section }) => (
                        <>
                         <Text style={styles.sectionHeader}>{section.title}</Text>
                         <FlatList 
                            data={section.data}
                            horizontal
                            renderItem={({ item }) => {
                                return <ListItem item={item} />
                            }}
                         />
                        </> 
                    )}
                    renderItem={({ item, section }) => {
                        return null
                        return <ListItem item={item} />
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "##9E9E9E"
    },
    sectionHeader: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#FF12E6",
        marginTop: 20,
        marginBottom: 5
    },
    item: {
        margin: 10
    },
    itemPic: {
        width: 200,
        height: 200
    },
    itemText: {
        color: "#F4F4F4"
    }
})