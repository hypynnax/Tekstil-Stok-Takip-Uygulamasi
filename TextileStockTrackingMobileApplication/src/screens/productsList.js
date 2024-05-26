<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../firebase/firebase";
import { useNavigation } from '@react-navigation/native';

const ProductListScreen = () => {
  const [products, setProducts] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const productsRef = database.ref("products");
    productsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setProducts(data || {});
    });

    return () => productsRef.off();
  }, []);

  const handleDelete = (id) => {
    database.ref(`products/${id}`).remove()
      .then(() => {
        console.log("Product removed successfully");
      })
      .catch((error) => {
        console.error("Error removing product: ", error);
      });
  };

  const handleEdit = (id) => {
    const product = products[id];
    navigation.navigate('ProductUpdateScreen', { product, id });
  };

=======
import React from "react";
import { ScrollView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductsListScreen = () => {
>>>>>>> origin/master
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>ID</Text>
          <Text style={styles.columnHeader}>Name</Text>
<<<<<<< HEAD
          <Text style={styles.columnHeader}>Data</Text>
          <Text style={styles.columnHeader}>Piece</Text>
          <Text style={styles.columnHeader}>Actions</Text>
        </View>
        {Object.keys(products).map((key) => (
          <View key={key} style={styles.tableRow}>
            <Text style={styles.columnData}>{key}</Text>
            <Text style={styles.columnData}>{products[key].name}</Text>
            <Text style={styles.columnData}>{products[key].data}</Text>
            <Text style={styles.columnData}>{products[key].piece}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(key)}>
                <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(key)}>
                <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
=======
          <Text style={styles.columnHeader}>Date</Text>
          <Text style={styles.columnHeader}>Piece</Text>
          <Text style={styles.columnHeader}>Actions</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.columnData}>1</Text>
          <Text style={styles.columnData}>T-shirt</Text>
          <Text style={styles.columnData}>18/01/2023</Text>
          <Text style={styles.columnData}>2000</Text>
          <TouchableOpacity style={styles.deleteButton}>
            <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Diğer ürünlerin kayıtları buraya eklenir */}
>>>>>>> origin/master
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
<<<<<<< HEAD
=======
    width:400,
>>>>>>> origin/master
  },
  columnHeader: {
    fontWeight: "bold",
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
<<<<<<< HEAD
=======
    width:340,
>>>>>>> origin/master
  },
  columnData: {
    flex: 1,
  },
<<<<<<< HEAD
  actionButtons: {
    flexDirection: "row",
  },
  editButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
=======
>>>>>>> origin/master
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5,
  },
});

<<<<<<< HEAD
export default ProductListScreen;
=======

export default ProductsListScreen;
>>>>>>> origin/master
