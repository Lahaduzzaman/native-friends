import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import User from './components/User/User';


export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  return (
    <View style={styles.container}>
      <Text>Total Friends: {users.length}</Text>

      {
        users.map(user => <User user={user}>{user.name}</User>)
      }

      <Text style={{ fontSize: 50 }}>{name}</Text>
      <Image
        source={{
          uri: 'https://www.cnet.com/a/img/HrdYrHufoPIj7tddR10QyWC3VWE=/1200x675/2020/09/04/779b0d99-31ed-4a30-82f5-517c48f2cd27/android-11.jpg',

        }}
        style={{ width: 200, height: 200 }}
      />

      <TextInput
        style={{
          height: 50,
          borderColor: 'blue',
          borderWidth: 3
        }}
        onChangeText={text => setName(text)}
        defaultValue=""
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
