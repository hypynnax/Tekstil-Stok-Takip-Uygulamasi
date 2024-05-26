import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PasswordResetScreen = ({ navigation }) => {
    const [mail, setMail] = useState('');

    const sendMail = () => {
        try {
            if (true) {
                navigation.navigate('Password Reset');
            } else {
                
            }
        } catch (error) {

        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send Mail</Text>
            <TextInput
                style={styles.input}
                placeholder="E-Mail"
                keyboardType='email-address'
                value={mail}
                onChangeText={setMail}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMail}>
                <Text style={styles.buttonText}>Send</Text>
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
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    sendButton: {
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

export default PasswordResetScreen;
