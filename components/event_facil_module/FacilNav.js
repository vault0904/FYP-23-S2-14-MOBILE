import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FacilHome from './FacilHome';
import FacilPickup from './FacilPickup';
import FacilChat from './FacilChat';
import FacilProfile from './FacilProfile';
import FacilEditProfile from './FacilEditProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

{/* For stack navigation between profile and edit profile page */}
const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#56844B',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerBackTitleVisible: false
            }}
        >
            <ProfileStack.Screen 
                name="FacilProfile" 
                component={FacilProfile}
                options={{
                    title:"Profile"
                }}
            />
            <ProfileStack.Screen 
                name="FacilEditProfile" 
                component={FacilEditProfile} 
                options={{
                    title:"Edit Profile"
                }}
            />
        </ProfileStack.Navigator>
    );
}

{/* For tab navigation the four pages below */}

const Tab = createBottomTabNavigator();


export default function FacilNav() {
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
            name="Hello, Facilator KRISS" 
            component={FacilHome}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Pickup" 
            component={FacilPickup} 
            options={{
                tabBarLabel: 'Pickup',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Chat" 
            component={FacilChat} 
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="chat" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="ProfileStack" 
            component={ProfileStackScreen} 
            options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
            }} 
        />
      </Tab.Navigator>
    );
  }