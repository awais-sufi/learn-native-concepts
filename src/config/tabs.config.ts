import HomeScreen from '../screens/private/home/HomeScreen';
import FavoritesScreen from '../screens/private/favorites/FavoritesScreen';
import NotificationScreen from '../screens/private/notification/NotificationScreen';
import ProfileScreen from '../screens/private/profile/ProfileScreen';
import { createTabIcon } from '../navigation/BottomTabs/createTabIcon';

export const TABS = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: require('../assets/icons/home_icon.png'),
    tabBarIcon: createTabIcon(require('../assets/icons/home_icon.png')),
    badge: true,
  },
  {
    name: 'Favorites',
    component: FavoritesScreen,
    icon: require('../assets/icons/heart_icon.png'),
    tabBarIcon: createTabIcon(require('../assets/icons/heart_icon.png')),
    badge: true,
  },
  {
    name: 'Notification',
    component: NotificationScreen,
    icon: require('../assets/icons//notification_icon.png'),
    tabBarIcon: createTabIcon(
      require('../assets/icons//notification_icon.png'),
    ),
    badge: true,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: require('../assets/icons/bag_icon.png'),
    tabBarIcon: createTabIcon(require('../assets/icons/bag_icon.png')),
    badge: true,
  },
] as const;
