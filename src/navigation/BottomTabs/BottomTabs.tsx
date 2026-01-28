import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TABS } from '../../config/tabs.config';
import { styles } from './BottomTabs.styles';

const Tab = createBottomTabNavigator();

// ⬇️ All screens where tabs should be hidden
const HIDE_TAB_ROUTES = ['Feedback', 'Contact'];

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        const hideTabBar = HIDE_TAB_ROUTES.includes(routeName);

        return {
          headerShown: false,
          tabBarActiveTintColor: '#111',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: [styles.tabBar, hideTabBar && styles.tabBarHidden],
          tabBarItemStyle: styles.tabItem,
          tabBarLabelStyle: styles.tabLabel,
        };
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
