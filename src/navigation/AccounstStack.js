import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import ChangeName from "../screens/Account/ChangeName";
import ChangeEmail from "../screens/Account/ChangeEmail";
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function AccounstStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: { backgroundColor: colors.bgLight },
      }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="change-name"
        component={ChangeName}
        options={{ title: "Cambiar nombre y apellidos" }}
      />
      <Stack.Screen
        name="change-email"
        component={ChangeEmail}
        options={{ title: "Cambiar email" }}
      />
    </Stack.Navigator>
  );
}
