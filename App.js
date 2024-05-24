import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './nubank-clone/src/views/Login/index'
import Home from './nubank-clone/src/views/Home/index'

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};