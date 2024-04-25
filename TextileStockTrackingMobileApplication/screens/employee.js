import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import EmployeeListScreen from './employeeList';
import EmployeeAddScreen from './addEmployee';
import EmployeeUpdateScreen from './updateEmployee';


const Tab = createBottomTabNavigator();

const EmployeeScreen = () => {
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
                <Tab.Screen name="List" component={EmployeeListScreen} />
                <Tab.Screen name="Add" component={EmployeeAddScreen} />
                <Tab.Screen name="Update" component={EmployeeUpdateScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default EmployeeScreen;
