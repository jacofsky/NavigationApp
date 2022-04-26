import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import 'react-native-gesture-handler';

import MenuLateralAvanzado from "./src/navigator/MenuLateralAvanzado";

const App = () => {
  
  return (
    <NavigationContainer>
      <MenuLateralAvanzado />
    </NavigationContainer>
  );
};



export default App;
