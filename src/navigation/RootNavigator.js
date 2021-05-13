import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingScreen} from '../screens/landing/LandingScreen';
import {SecretCodeScreen} from '../screens/onboarding/SecretCodeScreen';
import {SuccessScreen} from '../screens/success/SuccessScreen';

const Stack = createStackNavigator();

export const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Enter Secret Code" component={SecretCodeScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
