import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faUser, faShoppingCart } from "./icons";
import HomeScreen from "./screens/home";
import EmployeeScreen from "./screens/employee";
import ProductsScreen from "./screens/products";

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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

            if (route.name === "Home") {
              icon = (
                <FontAwesomeIcon icon={faHome} size={size} color={color} />
              );
            } else if (route.name === "Employee") {
              icon = (
                <FontAwesomeIcon icon={faUser} size={size} color={color} />
              );
            } else if (route.name === "Products") {
              icon = (
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size={size}
                  color={color}
                />
              );
            }

            return icon;
          },
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Employee" component={EmployeeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
