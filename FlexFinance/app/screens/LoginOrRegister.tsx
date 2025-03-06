import React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'

export default function LoginOrRegister(props) {
    return (
        <View style={styles.padre}>
            <View style={styles.logoContainer}>
                <Image source={require('@/assets/images/FlexFinanceLogo2.png')} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
                <Pressable style={styles.button1} onPress={() => props.navigation.navigate('Registrarse')}>
                    <Text style={styles.buttonText1}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F6F6E9',
        paddingVertical: 50,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        width: 350,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#457D58',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        marginTop: 20,
        width: 350,
        height: 56,
        borderRadius: 5,
        borderBlockColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#457D58',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText1: {
        color: '#457D58',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
})