import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button, ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Connect_Formular = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLogin = () => {
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

  const handleSub = () => {
    navigation.navigate('Subscribe_Screen');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/BeastModoLogo.png')}
      />
      <Text style={styles.title}>So, wanna connect ?</Text>
      <TextInput style={styles.inputs} label="Email" placeholder="Your email" />
      <TextInput style={styles.inputs} label="Password" placeholder="Your password" />
      <Button style={styles.btn} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <Text style={styles.txtBtn}>Loading</Text> : <Text style={styles.txtBtn}>Submit</Text>}
      </Button>
      <Button style={styles.btn} onPress={handleSub}>
        <Text style={styles.txtBtn}>Wait, you don't have an account? Come here</Text>
      </Button>
      {isLoading && <View><Text>Loading</Text><ProgressBar progress={progress} color="#3498db" /></View>}
    </View>
  );
};

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

export default Connect_Formular;
