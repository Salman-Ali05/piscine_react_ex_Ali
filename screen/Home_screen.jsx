import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connect_Formular from '../screen/Connect_Formular';
import Dashboard_Screen from '../Dashboard_Screen';
import Subscribe_Screen from '../screen/Subscribe_Screen';

const Home_Screen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            
            <Stack.Navigator initialRouteName="Connect_Formular">

                <Stack.Screen name="Connect_Formular" component={Connect_Formular} />

                <Stack.Screen name="Subscribe_Screen" component={Subscribe_Screen} />

                <Stack.Screen name="Dashboard_Screen" component={Dashboard_Screen} />

            </Stack.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
    },
    maintxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10
    }
});


export default Home_Screen