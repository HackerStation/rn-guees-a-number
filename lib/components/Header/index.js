import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants';

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 90,
    justifyContent: 'center',
    paddingTop: 36,
    width: '100%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
