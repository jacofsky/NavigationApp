import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ChatScreen from '../screens/ChatScreen'
import ContactsScreen from '../screens/ContactsScreen'
import AlbumsScreen from '../screens/AlbumsScreen'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colores } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'




const TopTab = createMaterialTopTabNavigator()

const TopTabNavigation = () => {

  const {top:paddingTop} = useSafeAreaInsets()

  return (
    <TopTab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      style={{paddingTop}}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor:colores.primary},
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarIcon: ({color}) => {
          let iconName:string = 'asd'

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chat'
              break;
            case 'ContactsScreen':
              iconName = 'contacts'
              break;

            case 'AlbumsScreen':
              iconName = 'collections'
              break;

            default:
              break;
          
          }

          return <Icon name={iconName} size={20} style={{color}} />
        }
      })}
      >

      <TopTab.Screen name='ChatScreen' options={{title:'Chat'}} component={ChatScreen} />
      <TopTab.Screen name='ContactsScreen' options={{title:'Contactos'}} component={ContactsScreen} />
      <TopTab.Screen name='AlbumsScreen' options={{title:'Albums'}} component={AlbumsScreen} />
    </TopTab.Navigator>
  )
}

export default TopTabNavigation