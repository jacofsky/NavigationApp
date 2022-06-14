import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../contexts/AuthContext'

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

  const {singIn} = useContext(AuthContext)

  useEffect(() => {

    navigation.setOptions({
      title: nombre
    })

    singIn(nombre)

  },[])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{id}. {nombre}</Text>
    </View>
  )
}

export default PersonaScreen