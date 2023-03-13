import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Categories from './pages/Categories'
import Meals from './pages/Meals'
import Detail from './pages/Detail'

const App = () => {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Categories' component={Categories} options={{ headerTintColor: 'orange', headerTitleStyle: {fontSize: 27}, }} />
                <Stack.Screen name='Detail' component={Detail} options={{ headerTintColor: 'orange',  headerTitleStyle: {fontSize: 27} }} />
                <Stack.Screen name='Meals' component={Meals} options={{ headerTintColor: 'orange',  headerTitleStyle: {fontSize: 27}, }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

