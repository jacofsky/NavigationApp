import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { styles } from '../theme/appTheme'

// interface Props extends StackScreenProps<any,any> {}

interface Props extends DrawerScreenProps<any,any> {}

const Pagina1Screen = ({navigation}:Props) => {



  useEffect(() => {

    
    navigation.setOptions({
      headerLeft: () => ( 
          <Button 
            title='Menu'
            onPress={() => navigation.toggleDrawer()}
          />
        )
    })
      
    
  }, [])
  


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button 
        title='Ir pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 5}}>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#06d6a0'}} onPress={() => navigation.navigate('PersonaScreen', {id: 1, nombre:  'Pedro'})}>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#ef476f'}} onPress={() => navigation.navigate('PersonaScreen', { id: 2,  nombre:  'Marcela'})}>
          <Text style={styles.botonGrandeTexto}>Marcela</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  )
}

export default Pagina1Screen