import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import EmployeeListScreen from "./employeeList";
import EmployeeAddScreen from "./addEmployee";
import EmployeeUpdateScreen from "./updateEmployee";

const TabEmployee = createBottomTabNavigator();

const EmployeeScreen = () => {
  return (
    <TabEmployee.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === "Employee List") {
            icon = <FontAwesomeIcon icon={faList} size={size} color={color} />;
          } else if (route.name === "Employee Add") {
            icon = <FontAwesomeIcon icon={faPlus} size={size} color={color} />;
          }

          return icon;
        },
      })}
    >
      <TabEmployee.Screen name="Employee List" component={EmployeeListScreen} />
      <TabEmployee.Screen name="Employee Add" component={EmployeeAddScreen} />
      <TabEmployee.Screen name="Employee Edit" component={EmployeeUpdateScreen} options={{ headerShown: false, tabBarButton: () => null }} />
    </TabEmployee.Navigator>
  );
};

export default EmployeeScreen;
