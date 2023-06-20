import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ParentHome from './ParentHome';
import ChildDetails from './ChildProfile';
import ParentPickup from './PickupSelection';
import ParentChat from './ParentChat';
import ParentProfile from './ParentProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


export default function ParentNav() {
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
            name="Hello, MS ZETTIFAR" 
            component={ParentHome}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Child Details" 
            component={ChildDetails} 
            options={{
                tabBarLabel: 'Child',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Pickup Selection" 
            component={ParentPickup} 
            options={{
                tabBarLabel: 'Pickup',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="star" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Chat" 
            component={ParentChat} 
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chat" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Profile" 
            component={ParentProfile} 
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