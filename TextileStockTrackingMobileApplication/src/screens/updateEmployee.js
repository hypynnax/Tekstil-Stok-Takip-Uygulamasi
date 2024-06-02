import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../firebase/firebase';


const EmployeeUpdateScreen = ({ route, navigation }) => {
  const { member } = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState('');

  useEffect(() => {
    if (member) {
      setFirstName(member.firstName || '');
      setLastName(member.lastName || '');
      setPhone(member.phone || '');
      setEmail(member.email || '');
    }
  }, [member]);

  const handleEditMember = async () => {
    try {
      const employeeDoc = doc(database, 'employees', member.id);
      await updateDoc(employeeDoc, {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
      });
      setShowMessage('Üye başarıyla güncellendi');
      setTimeout(() => {
        setShowMessage('');
        navigation.goBack();
      }, 3000);
    } catch (error) {
      setShowErrorMessage('Üye güncellenirken hata oluştu: ' + error.message);
      setTimeout(() => setShowErrorMessage(''), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üye Güncelle</Text>
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
      <TouchableOpacity
        style={styles.editButton} onPress={handleEditMember}>
        <Text style={styles.buttonText}>Güncelle</Text>
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
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  editButton: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
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

export default EmployeeUpdateScreen;
