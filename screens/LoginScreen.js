import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { auth } from '../firebase'


  const LoginScreen = ({ navigation }) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

     /* useEffect(() => {
       auth.onAuthStateChanged( user => {
            if(user){
                navigation.navigate('Home')
            }
        }) 
    })*/

    const handleRegister = ()=> {
        navigation.navigate('Register')
    }   

    const handleLogin = () => {
       /*  auth
        .signInWithEmailAndPassword(Email,Password)
        .then(userCredentials => {
            const user = Credential.user;
            console.log(user)
        })
        .catch(error => alert(error.message)) */
        navigation.navigate('Home')

    }

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Email' value={Email} onChangeText={ emailtext => setEmail(emailtext)} />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry value={Password} onChangeText={ passwordtext => setPassword(passwordtext)} />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerLink} onPress={handleRegister}>
                <Text style={{color: 'blue'}}>
                    Dont have an account? Register
                </Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain'
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 10,
        borderRadius: 10
    },
    buttonContainer: {
        width: '80%'
    },
    loginButton: {
        backgroundColor: 'lightgreen',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontWeight: '400',
        fontSize: 18
    },
    registerLink: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
