import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherHome from './TeacherHome';
import TeacherPickup from './TeacherPickup';
import TeacherChat from './TeacherChat';
import TeacherProfile from './TeacherProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


export default function TeacherNav() {
    return (
      <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#56844B'

            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            tabBarActiveTintColor: '#56844B',
        }}
      >
        <Tab.Screen 
            name="Hello, Teacher GREATSTORM" 
            component={TeacherHome}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Pickup" 
            component={TeacherPickup} 
            options={{
                tabBarLabel: 'Pickup',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Chat" 
            component={TeacherChat} 
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chat" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Profile" 
            component={TeacherProfile} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
            }} 
        />
      </Tab.Navigator>
    );
  }