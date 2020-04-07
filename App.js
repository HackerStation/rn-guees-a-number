import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';

export default function App() {
  return (
    <View style={styles.app}>
      <Header title='Guess a Number' />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
