import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper'


const Subscribe_Screen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/BeastModoLogo.png')}
            />
            <Text style={styles.title}>Wanna subscribe ? Got ya !</Text>
            <TextInput style={styles.inputs} label='First Name' placeholder='Your first name' />
            <TextInput style={styles.inputs} label='Last Name' placeholder='Your last name' />
            <TextInput style={styles.inputs} label='Email' placeholder='Your email' />
            <TextInput style={styles.inputs} label='Password' placeholder='Your password' />
            <TextInput style={styles.inputs} label='Confirm Password' placeholder='Your confirm password' />
            <Button style={styles.btn}><Text style={styles.txtBtn}>Submit</Text></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f8f8",
        margin: 5,
        borderRadius: 25
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        margin: 5
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
        width: 250,
        margin: 5,
        alignSelf: "center",
        backgroundColor: "#3498db",
        color: "#fff"
    },
    txtBtn: {
        color: "#3498db",
    },
    btn: {
        marginTop: 5,
        backgroundColor: "#333",
        width: 250,
        color: "red",
        alignSelf: "center",
        marginBottom: 10
    }
});

export default Subscribe_Screen