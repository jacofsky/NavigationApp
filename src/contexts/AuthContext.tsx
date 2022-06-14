import React, { createContext, useReducer } from 'react'
import authReducer from './authReducer'

export interface AuthState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

export const authInitialState:AuthState = {
    isLoggedIn: false
}

export interface AuthContextProps {
    authState: AuthState
    singIn: (nombre:string) => void
    logout: () => void
    setFavouriteIcon: (icon:string) => void
}


export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const singIn = (nombre:string) => {
        dispatch({type: 'signIn', payload: { nombre }})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const setFavouriteIcon = (icon:string) => {
        dispatch({type: 'setFavouriteIcon', payload: { icon }})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            singIn,
            logout,
            setFavouriteIcon
        }}>
            {children}
        </AuthContext.Provider>
    )
}