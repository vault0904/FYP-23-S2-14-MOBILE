//import libaries
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeacherHome from './TeacherHome';
import TeacherPickup from './TeacherPickup';
import TeacherBusPickUp from './TeacherBusPickup';
import DriverDetails from './DriverProfile';
import TeacherScanQR from './TeacherScanQR';
import TeacherChat from './TeacherChat';
import TeacherProfile from './TeacherProfile';
import TeacherEditProfile from './TeacherEditProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {userLastName} from '../Login';
import TeacherAnnouncements from '../common/TeacherAnnouncements';
import StudentProfile from './StudentProfile';

//announcement stack screen
const AnnouncementStack = createNativeStackNavigator();

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

{/* For stack navigation between pickup and qr scanning page */}
const PickUpStack = createNativeStackNavigator();

function PickUpStackScreen() {
    return (
        <PickUpStack.Navigator 
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
            <PickUpStack.Screen 
                name="TeacherPickup" 
                component={TeacherPickup}
                options={{
                    title:"Pick Up"
                }}
            />
            <PickUpStack.Screen 
                name="TeacherScanQR" 
                component={TeacherScanQR} 
                options={{
                    title:"Scanning QR Code"
                }}
            />
        </PickUpStack.Navigator>
    );
}

{/* For stack navigation between driver tab and driver profile */}
const TeacherBusPickUpStack = createNativeStackNavigator();

function TeacherBusPickUpStackScreen() {
    return (
        <TeacherBusPickUpStack.Navigator 
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
            <TeacherBusPickUpStack.Screen 
                name="TeacherBusPickup" 
                component={TeacherBusPickUp}
                options={{
                    title:"Pick Up"
                }}
            />
            <TeacherBusPickUpStack.Screen 
                name="TeacherScanQR" 
                component={TeacherScanQR} 
                options={{
                    title:"Scanning QR Code"
                }}
            />
            <TeacherBusPickUpStack.Screen 
                name="DriverDetails" 
                component={DriverDetails} 
                options={{
                    title:"Driver Details"
                }}
            />
            <TeacherBusPickUpStack.Screen 
                name="StudentProfile" 
                component={StudentProfile} 
                options={{
                    title:"Student Details"
                }}
            />
        </TeacherBusPickUpStack.Navigator>
    );
}



const Tab = createBottomTabNavigator();

function AnnouncementStackScreen() {
    //setting last name of user from login
    const Lname = userLastName;
    return (
      <AnnouncementStack.Navigator 
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
        {/* main page */}
        <AnnouncementStack.Screen 
          name="TeacherHome" 
          component={TeacherHome}
          options={{
            title: "Welcome, "+ Lname
          }}
        />
  
        {/* page to route to from main */}
        <AnnouncementStack.Screen 
          name="TeacherAnnouncementPage" 
          component={TeacherAnnouncements} 
          options={{
            title:"Announcements"
          }}
        />
      </AnnouncementStack.Navigator>
    );
  }


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
            name="Hello" 
            component={AnnouncementStackScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="TeacherBusPickUpStack" 
            component={TeacherBusPickUpStackScreen} 
            options={{
                headerShown: false,
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