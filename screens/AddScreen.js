import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { SelectList } from 'react-native-dropdown-select-list'



// import { auth } from '../firebase'


  const AddScreen = ({ navigation }) => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const samePassword = true

    const [date, setDate] = useState(dayjs());

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
            <Text style={styles.headerText}>Add New Task</Text>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={Name} onChangeText={ nametext => setName(nametext)} />
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={Email} onChangeText={ emailtext => setEmail(emailtext)} />
            <Text style={styles.label}>Priority</Text>
            <SelectList  setSelected={(val) => setSelected(val)} data={[{key:'1', value:'In Progress',key:'2', value:'To Do',key:'2', value:'Completed'}]} save="value"/>
            <Text style={styles.label}>Date</Text>
            <DateTimePicker mode="single" date={date} onChange={(params) => setDate(params.date)}
      />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

export default AddScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    label: {
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: 15, 
        paddingTop: 15
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
