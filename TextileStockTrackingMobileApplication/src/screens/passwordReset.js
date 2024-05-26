import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
<<<<<<< HEAD
import { auth } from '../../firebase/firebase';

const PasswordResetScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const reauthenticate = (currentPassword) => {
    const user = auth.currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(credential);
  };

  const handleChangePassword = () => {
    reauthenticate(currentPassword).then(() => {
      const user = auth.currentUser;
      user.updatePassword(newPassword).then(() => {
        console.log('Password updated successfully');
        // Şifre değiştirildiğinde ekranda bir mesaj göster veya kullanıcıyı başka bir ekrana yönlendir
      }).catch((error) => {
        console.error('Error updating password:', error);
      });
    }).catch((error) => {
      console.error('Error reauthenticating:', error);
    });
=======

const PasswordResetScreen = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    console.log('Şifre yenilendi:', { currentPassword, newPassword, confirmPassword });
>>>>>>> origin/master
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>Şifre Değiştir</Text>
      <TextInput
        style={styles.input}
        placeholder="Mevcut Şifre"
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifre"
=======
      <Text style={styles.title}>Password Reset</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        secureTextEntry={true}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
>>>>>>> origin/master
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />
<<<<<<< HEAD
      <TouchableOpacity style={styles.changeButton} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Şifreyi Değiştir</Text>
=======
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
>>>>>>> origin/master
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
<<<<<<< HEAD
  changeButton: {
=======
  resetButton: {
>>>>>>> origin/master
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordResetScreen;
<<<<<<< HEAD

=======
>>>>>>> origin/master
