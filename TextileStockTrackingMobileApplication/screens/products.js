import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import ProductsListScreen from "./productsList";
import ProductsAddScreen from "./addProduct";
import ProductsUpdateScreen from "./updateProduct";

const ProductsScreen = () => {
  const ListPage = () => {};

  const AddPage = () => {};

  const EditPage = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={ListPage} style={styles.navItem}>
          <FontAwesomeIcon icon={faList} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={AddPage} style={styles.navItem}>
          <FontAwesomeIcon icon={faPlus} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={EditPage} style={styles.navItem}>
          <FontAwesomeIcon icon={faEdit} size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductsScreen;
