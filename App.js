import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { COLORS, POST_DATA } from './components/constants';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar backgroundColor={COLORS.primary}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.secondary,
  }
});
