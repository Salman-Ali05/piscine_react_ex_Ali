import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button_Component from './components/Button_Component';
import State_Component from './components/State_Component';
import List_Component from './components/List_Component';
import Formular_Component from './components/Formular_Component';
import { NavigationContainer } from '@react-navigation/native';
import Connect_Formular from './screen/Connect_Formular';
import Dashboard_Screen from './Dashboard_Screen';
import Subscribe_Screen from './screen/Subscribe_Screen';
import Home_Screen from './screen/Home_Screen';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.maintxt}>Main Menu</Text>
      <NavigationContainer>
        <Home_Screen />
        {/* <State_Component /> */}
        {/* <Button_Component /> */}
        {/* <List_Component /> */}
        {/* <Formular_Component /> */}
        {/* <Connect_Formular /> */}
      </NavigationContainer>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: "center"
  },
  maintxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10
  }
});
