import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import ProductsListScreen from './productsList';
import ProductsAddScreen from './addProduct';
import ProductsUpdateScreen from './updateProduct';


const Tab = createBottomTabNavigator();

const ProductsScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let icon;

                        if (route.name === 'List') {
                            icon = <FontAwesomeIcon icon={faList} size={size} color={color} />;
                        } else if (route.name === 'Add') {
                            icon = <FontAwesomeIcon icon={faPlus} size={size} color={color} />;
                        } else if (route.name === 'Update') {
                            icon = <FontAwesomeIcon icon={faEdit} size={size} color={color} />;
                        }

                        return icon;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="List" component={ProductsListScreen} />
                <Tab.Screen name="Add" component={ProductsAddScreen} />
                <Tab.Screen name="Update" component={ProductsUpdateScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default ProductsScreen;
