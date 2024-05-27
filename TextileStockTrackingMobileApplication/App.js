import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "./src/screens/login";
import register from "./src/screens/register";
import passwordReset from "./src/screens/passwordReset";
import main from "./src/screens/mainPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ tabBarVisible: false }}>
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={register} options={{ headerShown: false }} />
        <Stack.Screen name="Password Reset" component={passwordReset} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
