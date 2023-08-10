//import libaries
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeacherHome from './TeacherHome';
import TeacherPickup from './TeacherPickup';
import TeacherBusPickUp from './TeacherBusPickup';
//import DriverDetails from './DriverProfile';
import DriverList from './DriverList';
import TeacherScanQR from './TeacherScanQR';
import TeacherChat from './TeacherChat';
import TeacherProfile from './TeacherProfile';
import TeacherEditProfile from './TeacherEditProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {userLastName} from '../Login';
import TeacherAnnouncements from '../common/TeacherAnnouncements';
import StudentProfile from './StudentProfile';
import StudentQR from './StudentQR';

//announcement stack screen
const AnnouncementStack = createNativeStackNavigator();

//driver selection stack screen
const DriverSelectionStack = createNativeStackNavigator();

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

{/* For stack navigation between self pickup and qr scanning page */}
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
                    title:"Self Pick Up"
                }}
            />
            <PickUpStack.Screen 
                name="TeacherScanQR" 
                component={TeacherScanQR} 
                options={{
                    title:"Scanning QR Code"
                }}
            />
            <PickUpStack.Screen 
                name="StudentProfile" 
                component={StudentProfile} 
                options={{
                    title:"Student Profile"
                }}
            />
        </PickUpStack.Navigator>
    );
}
{/* For stack navigation between bus driver list, bus pickup and student qr code page */}
function DriverSelectionStackScreen() {
    return (
        <DriverSelectionStack.Navigator
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
            <DriverSelectionStack.Screen
                name="DriverList" 
                component={DriverList} 
                options={{
                    title:"Driver List"
                }}
            />
            {/*Route to bus pick up page*/}
            <DriverSelectionStack.Screen
                name="TeacherBusPickup" 
                component={TeacherBusPickUp}
                options={{
                    title:"Bus Pick Up"
                }}
            />
            {/*Route to student QR Code page*/}
            <DriverSelectionStack.Screen
                name="StudentQR" 
                component={StudentQR} 
                options={{
                    title:"Student QR Code"
                }}
            />

        </DriverSelectionStack.Navigator>
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
            name="PickUpStack" 
            component={PickUpStackScreen} 
            options={{
                headerShown: false,
                tabBarLabel: 'Self Pick up',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="DriverSelectionStack" 
            component={DriverSelectionStackScreen} 
            options={{
                headerShown: false,
                tabBarLabel: 'Bus Pick up',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bus" color={color} size={size} />
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