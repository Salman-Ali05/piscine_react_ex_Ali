import { View, Text, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import { Button } from 'react-native-paper'

const State_Component = () => {

    const [bool, setBool] = useState(true)

    const handleSetBool = () => {
        setBool(!bool)
        // console.log(bool);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Current state: <Text style={styles.txtBool}>{bool ? 'True' : 'False'}</Text></Text>
            <Button style={styles.btn} onPress={handleSetBool}><Text style={styles.txtBtn}>Change State</Text></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    txt: {
        color: "#fff",
        fontWeight: "bold",
    },
    txtBool: {
        color: "red",
        fontWeight: "bold"
    },
    txtBtn: {
        color: "#3498db",
    },
    btn: {
        marginTop: 10,
        backgroundColor: "#f8f8f8",
        width: 250,
        color: "red"
    }
});

export default State_Component