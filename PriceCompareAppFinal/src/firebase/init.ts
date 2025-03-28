import firebase from '@react-native-firebase/app';

let firebaseApp: ReturnType<typeof firebase.app>;

export const initFirebase = () => {
  if (!firebaseApp) {
    // Initialize with default configuration from platform files
    firebaseApp = firebase.app();
  }
  return firebaseApp;
};
