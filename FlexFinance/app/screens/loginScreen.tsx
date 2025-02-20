import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import app from "@/firebaseConfig"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(app)




export default function loginScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logueIn = async()=>{
    try {
      await signInWithEmailAndPassword(auth,email,password);
      Alert.alert("Iniciando sesion","Accediendo...");
      props.navigation.navigate('Home');
    } catch (error) {
      Alert.alert("La contraseña o el usuario no son correctos")
    }
  }


  return (
    <View style={styles.padre}>
      <View>
        <Image source={require('@/assets/images/FlexFinanceLogo.png')} style={styles.logo} />
        <Text style={styles.bienvenida}>Bienvenido!</Text>
      </View>

      <View>
        <View>
          <TextInput
            label="Email"
            placeholder="Email"
            onChangeText={(text)=>setEmail(text)}
            placeholderTextColor="black"
            style={styles.textinput}
          />
          <TextInput
            label="password"
            placeholder="Contraseña"
            onChangeText={(text)=>setPassword(text)}
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.textinput}
          />
          <Text style={{ color: 'gray' }}>Olvidó su contraña?</Text>
          <Pressable onPress={logueIn} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </Pressable>
          <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 150}}>No tienes una cuenta? Crear una</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  logo: {
    width: 300,
    height: 300,
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

  bienvenida: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: '2C3930',
    fontWeight: 'bold',
    textAlign: 'center',
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
