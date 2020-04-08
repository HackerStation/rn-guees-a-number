import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Card = ({ children, style }) => {
  return <View style={{ ...styles.cardContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.26,
  },
});
