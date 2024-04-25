import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const EmployeeListScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tableHeader}>
                <Text style={styles.columnHeader}>ID</Text>
                <Text style={styles.columnHeader}>Name</Text>
                <Text style={styles.columnHeader}>Email</Text>
                <Text style={styles.columnHeader}>Actions</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.columnData}>1</Text>
                <Text style={styles.columnData}>John Doe</Text>
                <Text style={styles.columnData}>john@example.com</Text>
                <TouchableOpacity style={styles.deleteButton}>
                    <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
                </TouchableOpacity>
            </View>
            {/* Diğer üyelerin kayıtları buraya eklenir */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    columnHeader: {
        fontWeight: 'bold',
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
    columnData: {
        flex: 1,
    },
    deleteButton: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 5,
    },
});

export default EmployeeListScreen;
