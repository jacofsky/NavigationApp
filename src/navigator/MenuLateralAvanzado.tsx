import React from 'react'
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialIcons'

import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import { styles } from '../theme/appTheme'
import {  } from 'react-native-gesture-handler'
import { Tabs } from './TabNavigator'

export type RootDrawerParams = {
    Home: undefined,
    Settings: undefined
} 

const Drawer = createDrawerNavigator<RootDrawerParams>()

const MenuLateralAvanzado = () => {

  const {width} = useWindowDimensions()


  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerPosition: 'right',
        drawerType: width >= 692 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
      
    >
        <Drawer.Screen name='Home' component={Tabs} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      
      {/* AVATAR */}
      <View style={styles.avatarContainer}>
        <Image 
          source={require('../assets/avatar-placeholder.png')}
          style={styles.avatar}
        />
      </View>

      {/* OPCIONES MENU */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name='explore' size={20} />
          <Text style={styles.menuText} >Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name='settings' size={20} />
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>    

  )
}

export default MenuLateralAvanzado