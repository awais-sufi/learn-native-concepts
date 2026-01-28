import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingBottom: 80, // pushes form slightly down (pro look)
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

  errorText: {
    color: COLORS.error, // was '#E53935'
    fontSize: 12,
    marginTop: 4,
  },
});
