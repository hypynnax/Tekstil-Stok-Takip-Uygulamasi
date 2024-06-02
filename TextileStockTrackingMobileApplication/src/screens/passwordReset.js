import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { resetPassword } from '../../loginProcess'

const PasswordResetScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handlePasswordReset = async () => {
    const response = await resetPassword(email);
    if (response.success) {
      setSuccessMessage(response.message);
      setErrorMessage('');
      setTimeout(() => setSuccessMessage(''), 3000);
      setEmail('');
    } else {
      setErrorMessage(response.message);
      setSuccessMessage('');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Reset</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{errorMessage}</Text>
        </View>
      ) : null}
      {successMessage ? (
        <View style={styles.alertContainer}>
          <Text style={styles.successText}>{successMessage}</Text>
        </View>
      ) : null}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLogin}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#777',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffeeee',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  alertText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'red',
  },
  successText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'green',
  },
  backToLogin: {
    color: '#007bff',
    marginTop: 20,
  },
});

export default PasswordResetScreen;
