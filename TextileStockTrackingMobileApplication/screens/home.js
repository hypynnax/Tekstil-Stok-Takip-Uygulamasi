import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';

const stores = [
    { id: 1, name: 'Mağaza 1', description: 'Mağaza 1 Açıklaması', image: require('../components/store1.jpg') },
    { id: 2, name: 'Mağaza 2', description: 'Mağaza 2 Açıklaması', image: require('../components/store1.jpg') },
    { id: 3, name: 'Mağaza 3', description: 'Mağaza 3 Açıklaması', image: require('../components/store1.jpg') },
    { id: 4, name: 'Mağaza 4', description: 'Mağaza 4 Açıklaması', image: require('../components/store1.jpg') },
    { id: 5, name: 'Mağaza 5', description: 'Mağaza 5 Açıklaması', image: require('../components/store1.jpg') },
    { id: 6, name: 'Mağaza 6', description: 'Mağaza 6 Açıklaması', image: require('../components/store1.jpg') },
    { id: 7, name: 'Mağaza 7', description: 'Mağaza 7 Açıklaması', image: require('../components/store1.jpg') },
    { id: 8, name: 'Mağaza 8', description: 'Mağaza 8 Açıklaması', image: require('../components/store1.jpg') },
    { id: 9, name: 'Mağaza 9', description: 'Mağaza 9 Açıklaması', image: require('../components/store1.jpg') },
    { id: 10, name: 'Mağaza 10', description: 'Mağaza 10 Açıklaması', image: require('../components/store1.jpg') },

];

const HomeScreen = () => {
    const [selectedStore, setSelectedStore] = useState(null);

    const openModal = (store) => {
        setSelectedStore(store);
    };

    const closeModal = () => {
        setSelectedStore(null);
    };

    return (
        <View style={homeStyles.container}>
            {stores.map(store => (
                <TouchableOpacity key={store.id} style={homeStyles.card} onPress={() => openModal(store)}>
                    <Image source={store.image} style={homeStyles.image} />
                    <Text style={homeStyles.name}>{store.name}</Text>
                </TouchableOpacity>
            ))}

            <Modal
                visible={selectedStore !== null}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={homeStyles.modalContainer}>
                    <View style={homeStyles.modalContent}>
                        <Image source={selectedStore?.image} style={homeStyles.bigImage} />
                        <Text style={homeStyles.modalName}>{selectedStore?.name}</Text>
                        <Text style={homeStyles.modalDescription}>{selectedStore?.description}</Text>
                        <TouchableOpacity style={homeStyles.closeButton} onPress={closeModal}>
                            <Text style={homeStyles.closeButtonText}>Kapat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const homeStyles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: 150,
        height: 150,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    bigImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    modalName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
};

export default HomeScreen;