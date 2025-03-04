import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import Detail from "../views/Detail/Detail";
import { RootStackParams } from "../types";


const Stack = createNativeStackNavigator<RootStackParams>();

const routeScreenDefaultOptions = {
  headerStyle:{
    backgroundColor:'rgba(7,26,93,255)'
  },
  headerTitleStyle:{
    color:'white'
  }
}

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" id={undefined} >
        <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions}/>
        <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes
