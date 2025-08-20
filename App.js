import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/SplashScreen";
import InitialScreen from "./src/InitialScreen";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
