import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProductsUpdateScreen = ({ route }) => {
  const { product } = route.params;

  const [firstName, setFirstName] = useState(product.firstName);
  const [lastName, setLastName] = useState(product.lastName);
  const [password, setPassword] = useState(product.password);
  const [phone, setPhone] = useState(product.phone);
  const [email, setEmail] = useState(product.email);

  const handleEditMember = () => {
    // Burada üye düzenleme işlemi gerçekleştirilir
    // Örneğin, API çağrısı yapılabilir veya yerel depolama kullanılabilir
    console.log('Üye güncellendi:', { firstName, lastName, password, phone, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üye Düzenle</Text>
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
      <TouchableOpacity style={styles.editButton} onPress={handleEditMember}>
        <Text style={styles.buttonText}>Düzenle</Text>
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
  editButton: {
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

export default ProductsUpdateScreen;
