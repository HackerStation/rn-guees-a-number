import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './lib/components';
import { StartGame } from './sections';

export default function App() {
  return (
    <View style={styles.app}>
      <Header title='Guess a Number' />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
