import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button_Component from './components/Button_Component';
import State_Component from './components/State_Component';
import List_Component from './components/List_Component';
// import Home_screen from './screen/Home_screen';
import Formular_Component from './components/Formular_Component';
import Connect_Formular from './screen/Connect_Formular';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.maintxt}>Main Menu</Text>
      {/* <Home_screen /> */}
      <State_Component />
      <Button_Component />
      <List_Component />
      {/* <Formular_Component /> */}
      <Connect_Formular />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  maintxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: 'center',
    marginBottom :10
  }
});
