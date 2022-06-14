import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../contexts/AuthContext'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colores, styles } from '../theme/appTheme'

const SettingsScreen = () => {

  // Hoook para añadir safeAreas de una manera mas puntual
  const insets = useSafeAreaInsets()

  const {authState} = useContext(AuthContext)

  return (
    <View style={{...styles.globalMargin ,marginTop: insets.top}}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{authState.isLoggedIn ? 'Logged' : 'No logged' }</Text>
      <Text>{authState.isLoggedIn && `${authState.username}` }</Text>
      {
        (authState.isLoggedIn && authState.favoriteIcon) 
          && <Icon name={authState.favoriteIcon} size={80} color={colores.primary} /> 
      }

    </View>
  )
}

export default SettingsScreen