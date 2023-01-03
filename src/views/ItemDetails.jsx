import { View, Text, Button, Image, StyleSheet, Animated, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome }  from "@expo/vector-icons"
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SPACING = 15

const ItemDetails = ({ route, navigation }) => {
    const safeInsets = useSafeAreaInsets()
    const [favs, setFavs] = useState(false)
    const { title, size, ingredients, name, imageURL, favorite} = route.params
    console.log(name, favs)


    const renderIngredients = (info) => {
        return(
            <View style={{
                flexDirection:'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 45

            }}>
                <Text style={{ color: 'white', fontSize: 15}}>{ info.name}</Text>
                <Text style={{ color: 'white', fontSize: 15}}>{ info.quantity}</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return(
            <View style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                borderBottomColor: '#4e4a4a'
            }} />
        )
    }

    return (
        <View style={styles.container}>

            <Animated.View
            style={{
                position: 'absolute',
                top: safeInsets.top + SPACING,
                left: safeInsets.left + SPACING,
                right: safeInsets.right + SPACING,
                zIndex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
                
                <FontAwesome name='close' style={{color:"#FFFFFF", fontSize: 30,}} onPress={() => navigation.goBack()} />
                <Feather name='share' style={{color:"#FFFFFF", fontSize: 30, marginLeft:260, marginRight: 15}}/>
                <MaterialIcons 
                name={favs ? 'favorite' : 'favorite-border'} 
                style={{color:"#FFFFFF", fontSize: 30, marginRight: 2}}
                onPress={() => {
                    setFavs(!favs)
                    // favorite = favs
                    }}
                />
            </Animated.View>
            <Image source={{ uri: imageURL}} style={styles.postImage}/>
            
            <Animated.View 
            style={{
                position: 'relative',
                left: safeInsets.left + SPACING,
                right: safeInsets.right + SPACING,
                bottom: 100,
                flexDirection: 'column',
                alignItems: 'flex-start'
            }} >
                <Text style={styles.postSize}>{title}</Text>
                <Text style={styles.postTitle}>{name}</Text>
            </Animated.View>

            <View style={styles.postDetails}>
                <Text style={styles.postSize}>Ingredients</Text>
                <Text style={styles.postSize}>for {size}</Text>
                <Text></Text>

                <FlatList
                    data={ ingredients }
                    renderItem={({ item }) => renderIngredients( item )}
                    ItemSeparatorComponent={ itemSeparator}
                    showsVerticalScrollIndicator={ true}
                    key= { item => item.key}
                />
                
                
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#2C2C2C',
    },
    postDetails: {
        position: "relative",
        bottom: 45,
        paddingHorizontal: SPACING,
        flex: 1
    },
    postImage: {
        height: 350,
        width: '100%',
        opacity: 0.40
      },
    postTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FFFFFF"
      },
    postSize: {
        fontSize: 20,
        fontWeight: 'semi-bold',
        color: "#FFFFFF"
    },
    postIngredients: {
        textAlign:'left',
        color: "#FFFFFF"
    }
})

export default ItemDetails;