import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeacherHome from './TeacherHome';
import TeacherPickup from './TeacherPickup';
import TeacherChat from './TeacherChat';
import TeacherProfile from './TeacherProfile';
import TeacherEditProfile from './TeacherEditProfile';
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
                name="TeacherProfile" 
                component={TeacherProfile}
                options={{
                    title:"Profile"
                }}
            />
            <ProfileStack.Screen 
                name="TeacherEditProfile" 
                component={TeacherEditProfile} 
                options={{
                    title:"Edit Profile"
                }}
            />
        </ProfileStack.Navigator>
    );
}


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
            name="Pick up" 
            component={TeacherPickup} 
            options={{
                tabBarLabel: 'Pick up',
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