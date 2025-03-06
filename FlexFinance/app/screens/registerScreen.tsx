import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, Pressable, Alert, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import app from "@/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

export default function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Registrando", "Registrando usuario...");
      props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "No se pudo registrar el usuario");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.padre}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View onTouchCancel={Keyboard.dismiss} style={styles.padre}>
        <Image source={require('@/assets/images/FlexFinanceLogo2.png')} style={styles.logo} />
        <Text style={styles.bienvenida}>Registro</Text>
        <View>
          <TextInput
            label="Email"
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="black"
            style={styles.textinput}
          />
          <TextInput
            label="password"
            placeholder="Contraseña"
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.textinput}
          />

          <Pressable onPress={register} style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Login')}>
            <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 150 }}>Ya tienes una cuenta?</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6E9',
  },
  logo: {
    width: 300,
    height: 300,
  },
  bienvenida: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: '#2C3930',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textinput: {
    width: 350,
    height: 56,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 50,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 70,
    width: 350,
    height: 56,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
