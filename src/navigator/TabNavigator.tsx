import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { Platform, Text } from 'react-native'

import Tab1Screen from '../screens/Tab1Screen'
import { colores } from '../theme/appTheme'
import StackNavigator from './StackNavigator'
import TopTabNavigation from './TopTabNavigation'
import Icon from 'react-native-vector-icons/MaterialIcons'



export const Tabs = () => { 
  
  if(Platform.OS === 'ios'){
    return <TabIosNavigator />
  } else {
    return <TabAndroidNavigator />
  }
  
}

const TabAndroid = createMaterialBottomTabNavigator()

const TabAndroidNavigator = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      shifting={true}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color}) => {
          let iconName:string = ''

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'apps'
              break;

            case 'TopTab':
              iconName = 'public'
              break;

            case 'Stack':
              iconName = 'group'
              break;
            
            default:
              break;
          }

          return <Icon name={iconName} size={20} style={{color}} />
        }
      })
    }
    >
      {/* <Tab.Screen name='Tab1Screen' options={{title: 'Tab 1', tabBarIcon: (props) => <Text style={{color: props.color}}> T1 </Text> }} component={Tab1Screen} /> */}
      <TabAndroid.Screen name='Tab1Screen' options={{title: 'Iconos'}} component={Tab1Screen} />
      <TabAndroid.Screen name='TopTab' options={{title: 'Tab 2'}} component={TopTabNavigation} />
      <TabAndroid.Screen name='Stack' options={{title: 'Stack'}} component={StackNavigator} />

    </TabAndroid.Navigator>
  )
}




const TabIos = createBottomTabNavigator()

const TabIosNavigator = () => {
  return (
    <TabIos.Navigator
        sceneContainerStyle={{
          backgroundColor: 'white'
        }}

        screenOptions={({route}) => ({
          tabBarActiveTintColor: colores.primary,
          tabBarStyle: {
            borderTopColor: colores.primary
          },
          tabBarLabelStyle: {
            fontSize: 15
          },
          tabBarIcon: ({color}) => {
            let iconName:string = ''

            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'T1'
                break;

              case 'TopTab':
                iconName = 'T2'
                break;

              case 'Stack':
                iconName = 'S'
                break;
            
              default:
                break;
            }

            return <Text style={{color}}>{iconName}</Text>
          }
        })}
    >
      {/* <Tab.Screen name='Tab1Screen' options={{title: 'Tab 1', tabBarIcon: (props) => <Text style={{color: props.color}}> T1 </Text> }} component={Tab1Screen} /> */}
      <TabIos.Screen name='Tab1Screen' options={{title: 'Tab 1'}} component={Tab1Screen} />
      <TabIos.Screen name='TopTab' options={{title: 'Tab 2'}} component={TopTabNavigation} />
      <TabIos.Screen name='Stack' options={{title: 'Stack'}} component={StackNavigator} />

    </TabIos.Navigator>
  )
}