import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { signIn } from '../../loginProcess'
=======
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

>>>>>>> origin/master

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
<<<<<<< HEAD
  const [showErrorMessage, setShowErrorMessage] = React.useState('');

  const handleRegister = () => {
    if (!email || !password || !firstName || !lastName || !phoneNumber || !address) {
      setShowErrorMessage('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }

    var response = signIn(email, password);
    if (response) {
      navigation.navigate('Login');
      setShowErrorMessage('');
    } else {
      if (response == 0) {
        setShowErrorMessage('That email address is already in use!');
      }
      if (response == 1) {
        setShowErrorMessage('That email address is invalid!');
      }
    }
=======

  const handleRegister = () => {
    
>>>>>>> origin/master
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
<<<<<<< HEAD
      {showErrorMessage && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{showErrorMessage}</Text>
        </View>
      )}
=======
>>>>>>> origin/master
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
