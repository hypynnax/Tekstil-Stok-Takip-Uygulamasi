import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { database } from "../../firebase/firebase";


const ref = collection(database, 'employees');

const EmployeeListScreen = ({ navigation }) => {
  const [snapshot, loading, error] = useCollection(ref);
  const [employees, setEmployees] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState('');

  useEffect(() => {
    if (snapshot) {
      const employeesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setEmployees(employeesData);
    }
  }, [snapshot]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          style={styles.loadingImage}
          source={require('../components/loading.gif')}
        />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, 'employees', id));
      setShowMessage("User removed successfully");
      setTimeout(() => setShowMessage(''), 3000);
    } catch (error) {
      setShowErrorMessage("Error removing user: ", error);
      setTimeout(() => setShowErrorMessage(''), 3000);
    }
  };

  const handleEdit = (id) => {
    const member = employees.find(employee => employee.id === id);
    navigation.navigate('Employee Edit', { member });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>ID</Text>
          <Text style={styles.columnHeader}>Name</Text>
          <Text style={styles.columnHeader}>Email</Text>
          <Text style={styles.columnHeader}>Actions</Text>
        </View>
        {employees.map(employee => (
          <View key={employee.id} style={styles.tableRow}>
            <Text style={styles.columnData}>{employee.id}</Text>
            <Text style={styles.columnData}>{employee.firstName + " " + employee.lastName}</Text>
            <Text style={styles.columnData}>{employee.email}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(employee.id)}>
                <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(employee.id)}>
                <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: 430
  },
  columnHeader: {
    fontWeight: "bold",
    flex: 1
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: 360
  },
  columnData: {
    flex: 1
  },
  actions: {
    flexDirection: "row"
  },
  editButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 5,
    marginRight: 5
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 5
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
});

export default EmployeeListScreen;
