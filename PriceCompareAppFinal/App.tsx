import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { initFirebase } from './src/firebase/init';

// Initialize Firebase
initFirebase();

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PriceCompare App</Text>
      <Text style={styles.subtitle}>Firebase initialized successfully</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;