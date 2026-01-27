import * as Keychain from 'react-native-keychain';

const SERVICE_KEY = 'com.secureproject.auth';

export async function setAuthToken(token: string) {
  await Keychain.setGenericPassword('auth', token, {
    service: SERVICE_KEY,
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

export async function getAuthToken(): Promise<string | null> {
  const creds = await Keychain.getGenericPassword({
    service: SERVICE_KEY,
  });

  return creds ? creds.password : null;
}

export async function clearAuthToken() {
  await Keychain.resetGenericPassword({
    service: SERVICE_KEY,
  });
}
