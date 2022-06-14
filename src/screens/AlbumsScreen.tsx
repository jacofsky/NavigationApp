import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const AlbumsScreen = () => {

  const { authState, logout } = useContext(AuthContext)

  return (
    <View>
      <Text>AlbumsScreen</Text>
      {
        authState.isLoggedIn && <Button title='Logout' onPress={logout}/>
      }
    </View>
  )
}

export default AlbumsScreen