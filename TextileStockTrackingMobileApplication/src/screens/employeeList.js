<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../firebase/firebase";

const EmployeeListScreen = ({ navigation }) => {
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    const employeesRef = database.ref("employees");
    employeesRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setEmployees(data || {});
    });

    return () => employeesRef.off();
  }, []);

  const handleDelete = (id) => {
    database.ref(`employees/${id}`).remove()
      .then(() => console.log("User removed successfully"))
      .catch((error) => console.error("Error removing user: ", error));
  };

  const handleEdit = (id) => {
    const member = employees[id];
    navigation.navigate('EmployeeUpdateScreen', { member });
  };

=======
import React from "react";
import { ScrollView } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const EmployeeListScreen = () => {
>>>>>>> origin/master
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>ID</Text>
          <Text style={styles.columnHeader}>Name</Text>
          <Text style={styles.columnHeader}>Email</Text>
          <Text style={styles.columnHeader}>Actions</Text>
        </View>
<<<<<<< HEAD
        {Object.keys(employees).map((key) => (
          <View key={key} style={styles.tableRow}>
            <Text style={styles.columnData}>{key}</Text>
            <Text style={styles.columnData}>{employees[key].firstName}</Text>
            <Text style={styles.columnData}>{employees[key].email}</Text>
            <View style={styles.actions}>
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
        <View style={styles.tableRow}>
          <Text style={styles.columnData}>1</Text>
          <Text style={styles.columnData}>John</Text>
          <Text style={styles.columnData}>ja.com</Text>
          <TouchableOpacity style={styles.deleteButton}>
            <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Diğer üyelerin kayıtları buraya eklenir */}
>>>>>>> origin/master
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1, padding: 10 },
  tableHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10, width: 430 },
  columnHeader: { fontWeight: "bold", flex: 1 },
  tableRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5, backgroundColor: "#f0f0f0", borderRadius: 5, width: 360 },
  columnData: { flex: 1 },
  actions: { flexDirection: "row" },
  editButton: { backgroundColor: "blue", borderRadius: 5, padding: 5, marginRight: 5 },
  deleteButton: { backgroundColor: "red", borderRadius: 5, padding: 5 },
=======
  container: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width:430,
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
    width:360,
  },
  columnData: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5,
  },
>>>>>>> origin/master
});

export default EmployeeListScreen;
