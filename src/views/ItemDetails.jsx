import { SharedElement } from 'react-navigation-shared-element'
import { View, Text, Button, Image, StyleSheet, Animated, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem.jsx'
import Constants from 'expo-constants'
import React from 'react'
import { FontAwesome }  from "@expo/vector-icons"
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DataTable } from 'react-native-paper';

const SPACING = 15

const ItemDetails = ({ route, navigation }) => {
    const safeInsets = useSafeAreaInsets()
    const { title, size, ingredients, name, imageURL } = route.params
    
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
                justifyContent: 'flex-end'
            }}>
                
                <Feather name='share' style={{color:"#FFFFFF", fontSize: 30, }}/>
                <Feather name='heart' style={{color:"#FFFFFF", fontSize: 30, marginLeft:20, marginRight: 10}}/>
            </Animated.View>
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
                
                <DataTable>
                {ingredients.map((ingredient) => (
					<DataTable.Row key={ingredient.name}>
                        <DataTable.Cell textStyle= {{color:'#FFFFFF'}}>{ingredient.name} </DataTable.Cell>
                        <DataTable.Cell style={{justifyContent: 'flex-end'}} textStyle= {{color:'#FFFFFF'}} >{ingredient.quantity} </DataTable.Cell>
                    </DataTable.Row>
				))}
                </DataTable>
                
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#2C2C2C',
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
    },
    postDetails: {
        position: "relative",
        bottom: 45,
        paddingHorizontal: SPACING
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