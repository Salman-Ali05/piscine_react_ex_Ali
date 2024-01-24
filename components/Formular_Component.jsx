import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

const Formular_Component = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/BeastModoLogo.png')} // Remplacez le chemin par le chemin réel de votre image
            />
            <TextInput style={styles.inputs} label='First Name' placeholder='Your first name' />
            <TextInput style={styles.inputs} label='Last Name' placeholder='Your last name' />
            <TextInput style={styles.inputs} label='Email' placeholder='Your email' />
            <TextInput style={styles.inputs} label='Password' placeholder='Your password' />
            <TextInput style={styles.inputs} label='Confirm Password' placeholder='Your confirm password' />
            <Button title="Submit" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : "#f8f8f8",
        margin : 5
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: "#333",
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10
    },
    inputs: {
        height: 40,
        width : 250,
        margin: 5,
        alignSelf : "center",
    }
});

export default Formular_Component