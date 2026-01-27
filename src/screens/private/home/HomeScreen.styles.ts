import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2', // warm coffee background
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
    color: '#3E2723', // dark coffee
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#6D4C41', // coffee brown
    lineHeight: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
  },

  footer: {
    paddingBottom: 32,
  },
});
