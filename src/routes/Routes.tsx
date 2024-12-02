import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/welcome/Welcome';
import Login from "../pages/login/Login";
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
  
};

const Stack =  createNativeStackNavigator <RootStackParamList>();

const Routes = () => {
    
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Welcome"
                component={Welcome}
                options={{headerShown: false}}
                />

             <Stack.Screen
                name= "Login"
                component={Login}
                options={{headerShown: false}}
                />

            <Stack.Screen
                name= "Register"
                component={Register}
                options={{headerShown: false}}
                />
            
            <Stack.Screen
                name= "Home"
                component={Home}
                options={{headerShown: false}}
                />

        </Stack.Navigator>
    
   
)};

export default Routes;
