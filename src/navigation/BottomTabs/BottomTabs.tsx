import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TABS } from '../../config/tabs.config';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#111',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
        },
      }}
    >
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: tab.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
