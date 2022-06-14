import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colores, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab 1 screen effect')
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="flight" size={80} color={colores.primary} />
        <Icon name="android" size={80} color={colores.primary} />
        <Icon name="computer" size={80} color={colores.primary} />
        <Icon name="cake" size={80} color={colores.primary} />
        <Icon name="done" size={80} color={colores.primary} />


      </Text>
      
      
    </View>
  )
}

export default Tab1Screen