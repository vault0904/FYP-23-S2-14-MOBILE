import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';
import BottomTabScreen from './components/BottomTab';


const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
      <Stack.Screen 
        name = "Login" 
        component={LoginScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#56844B"
          }
        }} 
      />
      <Stack.Screen 
        name = "BottomTab" 
        component={BottomTabScreen} 
        options={{ headerShown: false }}
      />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
