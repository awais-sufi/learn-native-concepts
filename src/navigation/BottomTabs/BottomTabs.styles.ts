import { StyleSheet } from 'react-native'; // adjust path if needed
import { COLORS } from '../../theme/colors/colors';

export const styles = StyleSheet.create({
  tabBar: {
    height: 77,

    paddingHorizontal: 24,
    paddingBottom: 8,

    backgroundColor: COLORS.background, // was '#FFFFFF'

    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    // iOS shadow
    shadowColor: COLORS.black, // was '#000'
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    // Android
    elevation: 12,
  },

  tabBarHidden: {
    display: 'none',
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: COLORS.textSecondary, // 👈 subtle inactive label
  },
});
