import React from 'react'
import { useWindowDimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen'


export type RootDrawerParams = {
    Home: undefined,
    Settings: undefined
} 

const Drawer = createDrawerNavigator<RootDrawerParams>()

const MenuLateral = () => {

  const {width} = useWindowDimensions()


  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerPosition: 'right',
        drawerType: width >= 692 ? 'permanent' : 'front'
      }}
      
    >
        <Drawer.Screen name='Home' component={StackNavigator} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default MenuLateral