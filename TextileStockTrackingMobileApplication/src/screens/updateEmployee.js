import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from "../../firebase/firebase";

const EmployeeUpdateScreen = ({ route, navigation }) => {
  const { member } = route.params;

  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [password, setPassword] = useState(member.password);
  const [phone, setPhone] = useState(member.phone);
  const [email, setEmail] = useState(member.email);

  const handleEditMember = () => {
    const updatedMember = { firstName, lastName, password, phone, email };
    database.ref(`employees/${member.id}`).update(updatedMember)
      .then(() => {
        console.log("Member updated successfully");
        navigation.goBack();
      })
      .catch((error) => console.error("Error updating member: ", error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üye Düzenle</Text>
      <TextInput style={styles.input} placeholder="Ad" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Soyad" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Şifre" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Telefon" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="E-posta" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.editButton} onPress={handleEditMember}>
        <Text style={styles.buttonText}>Düzenle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', height: 40, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 },
  editButton: { backgroundColor: 'tomato', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default EmployeeUpdateScreen;
