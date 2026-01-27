import auth from '@react-native-firebase/auth';

export async function signUpWithEmail(email: string, password: string) {
  const result = await auth().createUserWithEmailAndPassword(email, password);
  return await result.user.getIdToken();
}

export async function loginWithEmail(email: string, password: string) {
  const result = await auth().signInWithEmailAndPassword(email, password);
  return await result.user.getIdToken();
}

export async function logout() {
  await auth().signOut();
}
