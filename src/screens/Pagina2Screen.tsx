import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

const Pagina2Screen = () => {


  const navigation = useNavigation()

  useEffect(() => {
    // IOS CAMBIAR VOLVER
    // SOBRESCRIBE EL STACKNAVIGATE
    navigation.setOptions({
      // title: 'dasd'
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title} >Pagina2Screen</Text>

      <Button 
        title='Ir a pagina 3'
        onPress={() => navigation.navigate('Pagina3Screen' as never)}
      />

    </View>
  )
}

export default Pagina2Screen