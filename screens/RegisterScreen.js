import React, { useState } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
// import { auth } from '../firebase'


  const RegisterScreen = ({ navigation }) => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const samePassword = true


    const handleRegister = () => {
       /*  auth
        .createUserWithEmailAndPassword(Email,Password)
        .then(userCredentials => {
            const user = Credential.user;
            console.log(user)
        })
        .catch(error => alert(error.message)) */
        alert('Register')
        navigation.navigate('Login')
    }

     const handleSamePassword = () => {
       //TO-DO: Validate same password 
    } 


    return (
      <SafeAreaView style={styles.container} behavior='padding'>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create Your Account</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Name' value={Name} onChangeText={ nametext => setName(nametext)} />
            <TextInput style={styles.input} placeholder='Email' value={Email} onChangeText={ emailtext => setEmail(emailtext)} />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry value={Password} onChangeText={ passwordtext => setPassword(passwordtext)} />
            <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry value={ConfirmPassword} onChangeText={ confirmpasswordtext => setConfirmPassword(confirmpasswordtext)} />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    headerContainer: {
        padding:10
    },
    headerText: {
        fontWeight: '400',
        fontSize: 24
    },
    inputContainer: {
        width: '90%',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        marginTop: 10,
        borderRadius: 10
    },
    buttonContainer: {
        width: '90%'
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
})
