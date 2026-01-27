import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true, // Android PIN fallback
});

export async function isBiometricAvailable(): Promise<boolean> {
  const { available } = await rnBiometrics.isSensorAvailable();
  return available;
}

export async function authenticateWithBiometrics(): Promise<boolean> {
  try {
    const { success } = await rnBiometrics.simplePrompt({
      promptMessage: 'Unlock using biometrics',
    });
    return success;
  } catch {
    return false;
  }
}
