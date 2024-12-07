import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/welcome/Welcome";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Work from "../pages/work/Work";
import ViewWorks from "../pages/viewWorks/ViewWorks";
import Task from "../pages/task/Task";

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    Dashboard: undefined;
    Work: undefined;
    ViewWorks: undefined
    Profile: undefined
    Task: undefined
  
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
                name= "Dashboard"
                component={Dashboard}
                options={{headerShown: false}}
                />
            
            <Stack.Screen
                name= "Work"
                component={Work}
                options={{headerShown: false}}
                />

            <Stack.Screen
                name= "ViewWorks"
                component={ViewWorks}
                options={{headerShown: false}}
                />

            <Stack.Screen
                name= "Task"
                component={Task}
                options={{headerShown: false}}
                />

        </Stack.Navigator>
    
   
)};

export default Routes;
