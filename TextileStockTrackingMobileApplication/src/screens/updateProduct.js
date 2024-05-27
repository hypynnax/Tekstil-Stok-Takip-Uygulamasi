import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from "../../firebase/firebase";

const ProductUpdateScreen = ({ route, navigation }) => {
  const { product, id } = route.params;

  const [name, setName] = useState(product.name);
  const [data, setData] = useState(product.data);
  const [piece, setPiece] = useState(product.piece);

  const handleEditProduct = () => {
    const updatedProduct = {
      name,
      data,
      piece,
    };

    database.ref(`products/${id}`).update(updatedProduct)
      .then(() => {
        console.log("Product updated successfully");
        navigation.goBack(); // Navigate back after update
      })
      .catch((error) => {
        console.error("Error updating product: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ürün Düzenle</Text>
      <TextInput
        style={styles.input}
        placeholder="Ürün Adı"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Veri"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        style={styles.input}
        placeholder="Adet"
        value={piece}
        onChangeText={setPiece}
      />
      <TouchableOpacity style={styles.editButton} onPress={handleEditProduct}>
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

export default ProductUpdateScreen;
