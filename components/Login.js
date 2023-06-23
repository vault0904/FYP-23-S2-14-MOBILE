import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    const userData = {
      username: username,
      password: password,
    };
    axios
      .post('http://localhost:3306/api/login', userData)
      .then((response) => {
        if (response.data.success) {
          navigation.navigate('TeacherNav');
        } else {
          console.log(response.data.error);
        }
      })
      .catch((error) => {
        console.log("Error during login", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MARSU-</Text>
        <Text style={styles.title}>PIUM-</Text>
      </View>
      <View>
        <Text style={styles.subTitleContainer}>Welcome back.</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Username'
          placeholderTextColor='#56844B'
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Password'
          placeholderTextColor='#56844B'
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 70,
    color: '#56844B',
    width: '80%',
  },
  titleContainer: {
    marginTop: 100,
    marginLeft: 35,
  },
  subTitleContainer: {
    color: '#56844B',
    marginLeft: 40,
    fontWeight: 'bold',
  },
  inputView: {
    marginVertical: 145,
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 25,
  },
  inputText: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#56844B',
  },
  loginBtn: {
    backgroundColor: '#56844B',
    marginVertical: 14,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 100,
    marginBottom: 50,
  },
  btnText: {
    padding: 15,
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});
