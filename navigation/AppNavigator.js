import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TravelPlanningScreen from '../screens/TravelPlanningScreen';
import GenerateTravelPlanScreen from '../screens/GenerateTravelPlanScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TravelPlanning" component={TravelPlanningScreen} />
        <Stack.Screen name="GenerateTravelPlan" component={GenerateTravelPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;