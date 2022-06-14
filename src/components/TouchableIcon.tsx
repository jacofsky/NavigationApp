import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colores, styles } from '../theme/appTheme'
import { AuthContext } from '../contexts/AuthContext'

interface Props {
    icon:string
}

const TouchableIcon = ({icon}:Props) => {
    
    const {setFavouriteIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity onPress={() => setFavouriteIcon(icon)}>
            <Icon name={icon} size={80} color={colores.primary} />
        </TouchableOpacity>
    )
}

export default TouchableIcon