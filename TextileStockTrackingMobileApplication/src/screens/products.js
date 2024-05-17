import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import ProductsListScreen from "./productsList";
import ProductsAddScreen from "./addProduct";
import ProductsUpdateScreen from "./updateProduct";

const TabProduct = createBottomTabNavigator();

const ProductsScreen = () => {
  return (
    <TabProduct.Navigator
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

          if (route.name === "Products List") {
            icon = <FontAwesomeIcon icon={faList} size={size} color={color} />;
          } else if (route.name === "Products Add") {
            icon = <FontAwesomeIcon icon={faPlus} size={size} color={color} />;
          } else if (route.name === "Products Edit") {
            icon = <FontAwesomeIcon icon={faEdit} size={size} color={color} />;
          }

          return icon;
        },
      })}
    >
      <TabProduct.Screen name="Products List" component={ProductsListScreen} />
      <TabProduct.Screen name="Products Add" component={ProductsAddScreen} />
      <TabProduct.Screen name="Products Edit" component={ProductsUpdateScreen} />
    </TabProduct.Navigator>
  );
};

export default ProductsScreen;
