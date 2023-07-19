import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkGuess = () => {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }
    const numGuess = parseInt(guess);
    if (numGuess > target) {
      setMessage('Too high!');
    } else if (numGuess < target) {
      setMessage('Too low!');
    } else {
      setMessage('You got it! Press "Reset" to play again.');
    }
  };

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1 and 100</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setGuess(text)}
        value={guess}
        keyboardType="number-pad"
      />
      <Button onPress={checkGuess} title="Submit Guess" />
      <Button onPress={resetGame} title="Reset" color="red" />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
