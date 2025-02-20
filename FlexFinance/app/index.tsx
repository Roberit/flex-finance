import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import loginScreen from './screens/loginScreen';
import MainScreen from './screens/MainScreen';





export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={loginScreen} options={{ headerTitle: '', headerShown: false }}/>
        <Stack.Screen name="Home" component={MainScreen} options={{ headerTitle: '', headerShown: false }} />
      </Stack.Navigator>
    );
  }



  return (
    
      <MyStack/>
    
  );
}

const styles = StyleSheet.create({});


