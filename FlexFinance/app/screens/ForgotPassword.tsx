import React, { useState } from 'react'
import { Text, StyleSheet, View, Alert, Pressable } from 'react-native'
import app from "@/firebaseConfig"
import { TextInput } from 'react-native-gesture-handler';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
const auth = getAuth(app);

export default function ForgotPassword(props) {

    const [email, setEmail] = useState('');

    const forgotPassword = async () => {
        if (!email) {
            Alert.alert("Error", "Por favor ingrese un email");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert("Enviado", "Se ha enviado un correo para restablecer la contraseña");
            props.navigation.navigate('Login');
        } catch (error) {
            Alert.alert("Error", "No se pudo enviar el correo");
            console.log(error);
        }
    }


    return (
        <View style={styles.padre}>
            <Text style={styles.titulo}>Olvidaste tu contraseña?</Text>
            <Text style={styles.subtitulo}>Ingresa tu correo electrónico, a continuación recibirás un correo con instrucciones.</Text>
            <TextInput
                placeholderTextColor="black"
                style={styles.textInput}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <Pressable style={styles.button} onPress={forgotPassword}>
                <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('Login')}>
                <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 150 }}>Volver</Text>
            </Pressable>
        </View>


    )
}


const styles = StyleSheet.create({

    padre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6E9',
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },

    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
    },

    textInput: {
        width: 350,
        height: 56,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10,
        marginTop: 50,
        backgroundColor: 'white'
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
})