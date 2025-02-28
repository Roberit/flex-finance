import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';





export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '', headerShown: false }} />
        <Stack.Screen name="Home" component={MainScreen} options={{ headerTitle: '', headerShown: false }} />
        <Stack.Screen name="Registrarse" component={RegisterScreen} options={{ headerTitle: '', headerShown: false }} />
        <Stack.Screen name="OlvidoClave" component={ForgotPassword} options={{ headerTitle: '', headerShown: false }} />
      </Stack.Navigator>
    );
  }



  return (
    <MyStack />
  );
}

const styles = StyleSheet.create({});


