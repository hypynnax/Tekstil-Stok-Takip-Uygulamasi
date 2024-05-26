import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from '../../firebase/firebase';

const ProductsAddScreen = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [piece, setPiece] = useState('');
  const [showMessage, setShowMessage] = useState('');

  const handleAddMember = () => {
    const productData = {
      name: name,
      data: data,
      piece: piece,
    };

    database.ref('products').push(productData)
      .then(() => {
        setShowMessage('Product added successfully');
        setName('');
        setData('');
        setPiece('');
      })
      .catch((error) => {
        setShowMessage('Error adding product: ', error);
      });
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
        placeholder="Şifre"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
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
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{error}</Text>
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
});

export default ProductsAddScreen;
