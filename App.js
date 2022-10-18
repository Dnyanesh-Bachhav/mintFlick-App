import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './components/HomeScreen/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar backgroundColor="#9C27B0"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#0f172a"
  }
});
