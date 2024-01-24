import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, ProgressBar, Button } from 'react-native-paper';

const Subscribe_Screen = () => {
    
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSub = () => {
        setIsLoading(true);
        const intervalId = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress < 1) {
                    return prevProgress + 0.1;
                } else {
                    setIsLoading(false);
                    clearInterval(intervalId);
                    navigation.navigate('Dashboard_Screen');
                    //   return 1;
                }
            });
        }, 1000);


    };


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
            <Button style={styles.btn} onPress={handleSub}><Text style={styles.txtBtn}>Subscribe</Text></Button>
            {isLoading && <View><Text>Loading</Text><ProgressBar progress={progress} color="#3498db" /></View>}
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