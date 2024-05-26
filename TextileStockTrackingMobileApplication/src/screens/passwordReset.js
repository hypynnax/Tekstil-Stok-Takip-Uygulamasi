import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
  };

  return (
    <View style={styles.container}>
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
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TouchableOpacity style={styles.changeButton} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Şifreyi Değiştir</Text>
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
  changeButton: {
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

