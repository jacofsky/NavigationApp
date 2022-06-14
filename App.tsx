import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import 'react-native-gesture-handler';

import MenuLateralAvanzado from "./src/navigator/MenuLateralAvanzado";
import { AuthProvider } from "./src/contexts/AuthContext";

const App = () => {
  
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateralAvanzado />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}



export default App;
