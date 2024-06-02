import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { doc, updateDoc, Timestamp } from 'firebase/firestore';
import { database } from '../../firebase/firebase';
import DateTimePicker from '@react-native-community/datetimepicker';


const ProductUpdateScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [piece, setPiece] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setDate(product.date ? product.date.toDate() : new Date());
      setPiece(product.piece || '');
    }
  }, [product]);

  const handleEditProduct = async () => {
    try {
      const productDoc = doc(database, 'products', product.id);
      await updateDoc(productDoc, {
        name: name,
        date: date,
        piece: piece,
      });
      setShowMessage('Ürün başarıyla güncellendi');
      setTimeout(() => {
        setShowMessage('');
        navigation.goBack();
      }, 3000);
    } catch (error) {
      setShowErrorMessage('Ürün güncellenirken hata oluştu: ' + error.message);
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
      <Text style={styles.title}>Ürün Güncelle</Text>
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
        value={piece}
        onChangeText={setPiece}
      />
      <TouchableOpacity
        style={styles.editButton} onPress={handleEditProduct}>
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

export default ProductUpdateScreen;
