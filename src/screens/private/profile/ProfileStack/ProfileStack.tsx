import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../ProfileScreen';
import FeedbackScreen from '../FeedbackScreen/FeedbackScreen';
import ContactUsScreen from '../ContactUsScreen/ContactUsScreen';

export type ProfileStackParamList = {
  Profile: undefined;
  Feedback: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{ title: 'Feedback' }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactUsScreen}
        options={{ title: 'Contact' }}
      />
    </Stack.Navigator>
  );
}
