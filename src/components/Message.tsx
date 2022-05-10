import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setMessage } from '../store/message';

const Message = () => {
  const dispatch = useDispatch();
  const [text, SetText] = React.useState("Initial");
  const { message} = useSelector((state: RootState) => state.message);

  const handlePress = () => {
    dispatch(setMessage(text));
  };


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={SetText}
          value={text}
        />

      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>DISPATCH {message}</Text>
      </View>
      <View style={styles.row}>
        <Button title='Call Redux' onPress={handlePress} />
      </View>

    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbbbff',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  }
});
