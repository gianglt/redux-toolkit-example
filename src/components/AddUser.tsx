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
import { fetchUsers, selectAllUsers } from '../store/users';


const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  return (
    <View>
      <Button title={'Remove'} onPress={() => dispatch(fetchUsers())} />
    </View>
  );
};

export default Users;

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
