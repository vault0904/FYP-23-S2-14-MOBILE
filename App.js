import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';
import TeacherNav from './components/teacher_module/TeacherNav';
import ParentNav from './components/parent_module/ParentNav';


/*
      <Stack.Screen 
        name = "TeacherNav" 
        component={TeacherNav} 
        options={{ headerShown: false }}
      />
      */

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
        name = "TeacherNav" 
        component={TeacherNav} 
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
