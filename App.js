import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! df</Text>
      <StatusBar style="auto" />
      <Header></Header>
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
});
