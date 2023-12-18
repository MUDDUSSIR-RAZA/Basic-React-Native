import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {
  const alertPress = () => {
    alert("This is basic React Native App!.")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basic React Native App Created!</Text>
      <StatusBar style="auto" />
      <Button title='ALERT' onPress={alertPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:24,
    marginTop: 15
  }
});
