import { AuthState } from "./AuthContext";

type AuthAction = 
    | { type: 'signIn', payload: { nombre:string } }
    | { type: 'logout' }
    | { type: 'setFavouriteIcon', payload: { icon:string } }

const AuthReducer = (state:AuthState, action:AuthAction):AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.nombre,
            }

        case 'logout':
            return {
                isLoggedIn: false,  
            }

        case 'setFavouriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload.icon
            }
    
        default:
            return state
    }
}

export default AuthReducer