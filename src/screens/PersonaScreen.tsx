import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'

// interface RouterParams {
//   id: number,
//   nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

const PersonaScreen = ({route, navigation} : Props) => {

  // MANERA RAPIDA
  // const {nombre, id} = route.params as RouterParams
  const {nombre, id} = route.params
  
  console.log(route.params)

  useEffect(() => {

    navigation.setOptions({
      title: nombre
    })

  },[])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{id}. {nombre}</Text>
    </View>
  )
}

export default PersonaScreen