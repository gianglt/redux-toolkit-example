import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';



const Secondary = () => {
  const { message} = useSelector((state: RootState) => state.message);


  return (
    <View>
      <View>
        <Text style={{fontSize:20}}>Control kế thừa</Text>
      </View>
      <View>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
};

export default Secondary;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  dataContainer: {
    flexDirection: 'row'
  },
  text:{
    fontStyle:'italic',
  },
});
