import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setMessage } from '../store/message';

const Message = () => {
  const dispatch = useDispatch();
  // const [text, onChangeText] = React.useState("");
  const { message} = useSelector((state: RootState) => state.message);


  const onChangeText = (text: string) => {
    dispatch(setMessage(text));
  };

  const handlePress = () => {
    dispatch(setMessage("Reset text"));
  };

  // useEffect(() => {
  
  //   return () => {
      
  //   }
  // }, [])
  

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={message}
        />

      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{message}</Text>
      </View>
      <View style={styles.row}>
        <Button title={'Reset Message'} onPress={handlePress} />
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
