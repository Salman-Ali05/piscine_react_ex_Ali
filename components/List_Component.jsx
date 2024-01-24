import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const List_Component = () => {

    const list =
        [
            { prenom: 'Devin' },
            { prenom: 'Dan' },
            { prenom: 'Dominic' },
            { prenom: 'Jackson' },
            { prenom: 'James' },
            { prenom: 'Joel' },
            { prenom: 'John' },
            { prenom: 'Jillian' },
            { prenom: 'Jimmy' },
            { prenom: 'Julie' },
        ]
    return (
        <View style={styles.container}>
            {list.map((item, index) => (
                <Text style={styles.txt} key={index}>Prénom {index} : {item.prenom}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    txt: {
        color: "#fff",
    }
});

export default List_Component