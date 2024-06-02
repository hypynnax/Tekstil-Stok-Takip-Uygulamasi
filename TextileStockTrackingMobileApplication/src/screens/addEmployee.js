import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../firebase/firebase';


const ref = collection(database, "employees");

const EmployeeAddScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState('');

  const handleAddMember = async () => {
    if (!firstName || !lastName || !phone || !email) {
      setShowErrorMessage("Lütfen tüm alanları doldurun");
      setTimeout(() => setShowErrorMessage(''), 3000);
      return;
    }
    
    try {
      await addDoc(ref, {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
      });
      setShowMessage("Üye başarıyla eklendi!");
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setTimeout(() => setShowMessage(''), 3000);
    } catch (error) {
      setShowErrorMessage(`Hata: ${error.message}`);
      setTimeout(() => setShowErrorMessage(''), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üye Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddMember}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
      {showMessage && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>{showMessage}</Text>
        </View>
      )}
      {showErrorMessage && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{showErrorMessage}</Text>
        </View>
      )}
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
  addButton: {
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
  successContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  successText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'green',
  },
});

export default EmployeeAddScreen;
