import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';
import TeacherNav from './components/teacher_module/TeacherNav';
import ParentNav from './components/parent_module/ParentNav';
import FacilNav from './components/event_facil_module/FacilNav';
import DriverNav from './components/bus_driver_module/DriverNav';
import LandingPage from './components/common/LandingPage';

//creating a stack navigator
const Stack = createStackNavigator();

//creating a route for the user type
const ScreenNav = ({ route }) => {
  const {userType} = route.params;
  //console.log("User Type:", userType);
  if (userType === 'parent') {
    return <ParentNav />;
  } else if (userType === 'teacher') {
    return <TeacherNav />;
  } else if (userType === 'driver') {
    return <DriverNav />;
  } else if (userType === 'event_facilitator') {
    return <FacilNav />;
  } else {
    // Display error message or fallback component
    return <p>Invalid login, please try again</p>;
  }
};

//default navigator 
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingPage}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#56844B"
            }
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#56844B"
            }
          }}
        />
        <Stack.Screen
          name="ScreenNav"
          component={ScreenNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
