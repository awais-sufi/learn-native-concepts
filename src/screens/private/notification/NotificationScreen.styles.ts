import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAF7F2',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF7F2',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 24,
    marginBottom: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3E2723',
  },

  subtitle: {
    fontSize: 14,
    color: '#6D4C41',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  cardText: {
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3E2723',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#6D4C41',
    marginTop: 2,
  },

  time: {
    fontSize: 11,
    color: '#9E9E9E',
    alignSelf: 'flex-end',
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 160,
    marginBottom: 16,
  },

  emptyText: {
    fontSize: 14,
    color: '#6D4C41',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
