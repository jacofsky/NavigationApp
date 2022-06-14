import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colores, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TouchableIcon from '../components/TouchableIcon'

const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab 1 screen effect')
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon icon="flight" />
        <TouchableIcon icon="android" />
        <TouchableIcon icon="computer" />
        <TouchableIcon icon="cake" />
        <TouchableIcon icon="done" />


      </Text>
      
      
    </View>
  )
}

export default Tab1Screen