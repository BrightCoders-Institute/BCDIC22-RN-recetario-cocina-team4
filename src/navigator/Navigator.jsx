import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Main from '../views/Main';
import ItemDetails from '../views/ItemDetails'

const Stack  = createStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
        name='Main' 
        component={ Main } 
        />
        
        <Stack.Screen  
        name='ItemDetails' 
        component={ ItemDetails }
        />

    </Stack.Navigator>
  )
}
export default Navigator;
