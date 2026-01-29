import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingBottom: 80,
    backgroundColor: COLORS.background, // was '#fff'
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    color: COLORS.textPrimary, // was '#111'
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary, // was '#666'
    marginBottom: 24,
  },

  form: {
    marginTop: 12,
  },

  spacer: {
    height: 12,
  },

  footerButton: {
    marginTop: 16,
  },

  authError: {
    color: COLORS.error, // was '#D32F2F'
    fontSize: 12,
    marginTop: 4,
    marginStart: 4,
  },
});
