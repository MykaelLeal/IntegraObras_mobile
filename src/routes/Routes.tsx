import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/welcome/Welcome";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Work from "../pages/work/Work";
import ViewWorks from "../pages/viewWorks/ViewWorks";
import CreateTask from "../pages/task/Task";
import ViewTask from "../pages/task/ViewTask";
import CreateReport from "../pages/report/CreateReport";
import ViewReport from "../pages/report/ViewReports";

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    Dashboard: undefined;
    Work: undefined;
    ViewWorks: undefined
    Profile: undefined
    CreateTask: undefined
    ViewTask: undefined
    CreateReport: undefined
    ViewReport: undefined
  
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
                name= "CreateTask"
                component={CreateTask}
                options={{headerShown: false}}
                />

            <Stack.Screen
                name= "ViewTask"
                component={ViewTask}
                options={{headerShown: false}}
                />
            
            <Stack.Screen
                name= "CreateReport"
                component={CreateReport}
                options={{headerShown: false}}
                />

            <Stack.Screen
                name= "ViewReport"
                component={ViewReport}
                options={{headerShown: false}}
                />

        </Stack.Navigator>
    
   
)};

export default Routes;
