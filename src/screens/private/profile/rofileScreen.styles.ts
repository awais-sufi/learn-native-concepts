import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2', // same as Home
    paddingHorizontal: 20,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  header: {
    marginBottom: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3E2723', // coffee dark
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#6D4C41',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    alignItems: 'center',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3E2723',
    marginBottom: 4,
  },

  email: {
    fontSize: 13,
    color: '#6D4C41',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3E2723',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },

  infoText: {
    fontSize: 14,
    color: '#6D4C41',
    lineHeight: 20,
    textAlign: 'left',
  },

  footer: {
    paddingBottom: 32,
  },
  linkRow: {
    marginTop: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  linkText: {
    fontSize: 16,
    color: '#007AFF', // iOS blue
    fontWeight: '500',
  },
});
