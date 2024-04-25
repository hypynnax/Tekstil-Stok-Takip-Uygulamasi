import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faShoppingCart } from './icons';
import HomeScreen from './screens/home'
import EmployeeScreen from './screens/employee'
import ProductsScreen from './screens/products'


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
            } else if (route.name === 'Employee') {
              icon = <FontAwesomeIcon icon={faUser} size={size} color={color} />;
            } else if (route.name === 'Products') {
              icon = <FontAwesomeIcon icon={faShoppingCart} size={size} color={color} />;
            }

            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Employee" component={EmployeeScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
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