import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Button_Component = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.btn}><Text style={styles.txtBtn}>I'm just the button from the ex 2</Text></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
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


export default Button_Component