import React, { useState } from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Card, Input } from '../../lib/components';

import { Colors } from '../../lib/constants';

export const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleNumberInput = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            placeholder='0-100'
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            maxLength={2}
            keyboardType='number-pad'
            onChangeText={(text) => handleNumberInput(text)}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title='Confirm' color={Colors.primary} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 5,
    width: '33%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    alignItems: 'center',
    width: '80%',
  },
  input: {
    textAlign: 'center',
    width: 48,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});
