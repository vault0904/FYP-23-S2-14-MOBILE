import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';
import TeacherNav from './components/teacher_module/TeacherNav';
import ParentNav from './components/parent_module/ParentNav';
import FacilNav from './components/event_facil_module/FacilNav';
import DriverNav from './components/bus_driver_module/DriverNav';

const Stack = createStackNavigator();

const ScreenNav = ({ route }) => {
  console.log("User Type:", userType);
  const {userType} = route.params;
  console.log("User Type:", userType);
  if (userType === 'admin01') {
    return <TeacherNav />;
  } else if (userType === 'teacher01') {
    return <TeacherNav />;
  } else if (userType === 'parent01') {
    return <ParentNav />;
  } else if (userType === 'faci01') {
    return <FacilNav />;
  } else if (userType === 'driver01') {
    return <DriverNav />;
  } else {
    // Display error message or fallback component
    return <p>Invalid user type. Please try again.</p>;
  }
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "",
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
