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

          if (route.name === "List") {
            icon = <FontAwesomeIcon icon={faList} size={size} color={color} />;
          } else if (route.name === "Add") {
            icon = <FontAwesomeIcon icon={faPlus} size={size} color={color} />;
          } else if (route.name === "Edit") {
            icon = <FontAwesomeIcon icon={faEdit} size={size} color={color} />;
          }

          return icon;
        },
      })}
    >
      <TabEmployee.Screen name="List" component={EmployeeListScreen} />
      <TabEmployee.Screen name="Add" component={EmployeeAddScreen} />
      <TabEmployee.Screen name="Edit" component={EmployeeUpdateScreen} />
    </TabEmployee.Navigator>
  );
};

export default EmployeeScreen;
