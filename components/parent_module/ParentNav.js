//import libaries
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParentHome from './ParentHome';
import ChildDetails from './ChildProfile';
import ParentPickup from './PickupSelection';
import ChildSelection from './ChildSelectionPage';
import ParentChat from './ParentChat';
import ParentProfile from './ParentProfile';
import ParentEditProfile from './ParentEditProfile';
import ChildProfileSelection from './ChildProfileSelection';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ParentAnnouncements from '../common/ParentAnnouncementPage';
import SubscriptionLayout from './subscription_module/SubscriptionLayout'
import PremiumSubscription from './subscription_module/PremiumSubscriptionPage';
import BasicSubscription from './subscription_module/BasicSubscriptionPage';

//import the userLastName from login
import {userLastName} from '../Login';

const AnnouncementStack = createNativeStackNavigator();

{/* For stack navigation between profile and edit profile page */}
const ProfileStack = createNativeStackNavigator();

{/* For stack navigation between child tabs and pickup selection page */}
const PickupSelectStack = createNativeStackNavigator();

{/* For stack navigation between child tabs and child profile */}
const ChildProfileStack = createNativeStackNavigator();


function ProfileStackScreen({route}) {
    const usertype = route.params || {}; 
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
            {/* main page */}
            <ProfileStack.Screen 
                name="ParentProfile" 
                component={ParentProfile}
                options={{
                    title:"Profile"
                }}
            />

            {/* page to route to from main */}
            <ProfileStack.Screen 
                name="ParentEditProfile" 
                component={ParentEditProfile} 
                options={{
                    title:"Edit Profile"
                }}
            />

            {/* page to route to from main */}
            {/* {usertype === 'basic' ? (
                <ProfileStack.Screen 
                name="BasicProfile" 
                component={BasicSubscription} 
                options={{
                    title: "Basic Profile"
                }}
                />
            ) : usertype === 'prem' ? (
                <ProfileStack.Screen 
                name="PremiumProfile" 
                component={PremiumSubscription} 
                options={{
                    title: "Premium Profile"
                }}
                />
            ) : null} */}

            {/* page to route to from main */}
            <ProfileStack.Screen 
                name="PremiumSubscriptionPage" 
                component={PremiumSubscription} 
                options={{
                    title:"Manage Subscription"
                }}
            /> 

            <ProfileStack.Screen 
                name="BasicSubscriptionPage" 
                component={BasicSubscription} 
                options={{
                    title:"Manage Subscription"
                }}
            /> 


            </ProfileStack.Navigator>
            );
            }

function ChildSelectionStackScreen() {
    return (
        <PickupSelectStack.Navigator 
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
            <PickupSelectStack.Screen 
                name="ChildPickupSelection" 
                component={ChildSelection}
                options={{
                    title:"Select Child Pickup"
                }}
            />

            {/* page to route to from main */}
            <PickupSelectStack.Screen 
                name="PickupSelection" 
                component={ParentPickup} 
                options={{
                    title:"Pickup Selection"
                }}
            />
        </PickupSelectStack.Navigator>
    );
}

function ChildProfileStackScreen() {
    return (
        <ChildProfileStack.Navigator 
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
            <ChildProfileStack.Screen 
                name="ChildProfileSelection" 
                component={ChildProfileSelection}
                options={{
                    title:"Select Child Profile"
                }}
            />

            {/* page to route to from main */}
            <ChildProfileStack.Screen 
                name="ChildDetails" 
                component={ChildDetails} 
                options={{
                    title:"Child Details"
                }}
            />
        </ChildProfileStack.Navigator>
    );
}

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
          name="ParentHome" 
          component={ParentHome}
          options={{
            title: "Welcome, "+ Lname
          }}
        />
  
        {/* page to route to from main */}
        <AnnouncementStack.Screen 
          name="ParentAnnouncementPage" 
          component={ParentAnnouncements} 
          options={{
            title:"Announcements"
          }}
        />
      </AnnouncementStack.Navigator>
    );
  }

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
            name="Child Details" 
            component={ChildProfileStackScreen} 
            options={{
                headerShown: false,
                tabBarLabel: 'Child',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Select Child Profile" 
            component={ChildSelectionStackScreen} 
            options={{
                headerShown: false,
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