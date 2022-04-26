import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

const SettingsScreen = () => {

  // Hoook para añadir safeAreas de una manera mas puntual
  const insets = useSafeAreaInsets()

  return (
    <View style={{...styles.globalMargin ,marginTop: insets.top}}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen