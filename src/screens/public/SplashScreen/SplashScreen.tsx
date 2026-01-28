import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors/colors';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🔥 MyApp</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
