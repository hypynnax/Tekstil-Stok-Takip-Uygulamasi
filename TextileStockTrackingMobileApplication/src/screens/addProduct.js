import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../firebase/firebase';

const ref = collection(database, "products");

const ProductsAddScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [piece, setPiece] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddProduct = async () => {
    setShowErrorMessage('');
    setShowMessage('');

    if (!name || !date || !piece) {
      setShowErrorMessage("Lütfen tüm alanları doldurun");
      setTimeout(() => setShowErrorMessage(''), 3000);
      return;
    }

    try {
      await addDoc(ref, {
        name: name,
        date: date,
        piece: piece,
      });
      setShowMessage("Ürün başarıyla eklendi!");
      setName('');
      setDate(new Date());
      setPiece('');
      setTimeout(() => setShowMessage(''), 3000);
    } catch (error) {
      setShowErrorMessage(`Hata: ${error.message}`);
      setTimeout(() => setShowErrorMessage(''), 3000);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ürün Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Ürün Adı"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Adet"
        keyboardType="numeric"
        value={piece}
        onChangeText={setPiece}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
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
    justifyContent: 'center',
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

export default ProductsAddScreen;
