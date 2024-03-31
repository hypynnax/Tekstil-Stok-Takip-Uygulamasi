import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faShoppingCart, faStar } from './icons';

const stores = [
  { id: 1, name: 'Mağaza 1', description: 'Mağaza 1 Açıklaması', image: require('./store1.jpg') },
  { id: 2, name: 'Mağaza 2', description: 'Mağaza 2 Açıklaması', image: require('./store1.jpg') },
  { id: 3, name: 'Mağaza 3', description: 'Mağaza 3 Açıklaması', image: require('./store1.jpg') },
];

function HomePage() {
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
}

function PersonPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Person Page</Text>
    </View>
  );
}

function ProductPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Page</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon;

            if (route.name === 'Home') {
              icon = <FontAwesomeIcon icon={faHome} size={size} color={color} />;
            } else if (route.name === 'Person') {
              icon = <FontAwesomeIcon icon={faUser} size={size} color={color} />;
            } else if (route.name === 'Product') {
              icon = <FontAwesomeIcon icon={faShoppingCart} size={size} color={color} />;
            }

            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Person" component={PersonPage} />
        <Tab.Screen name="Product" component={ProductPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

const homeStyles = StyleSheet.create({
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
});
