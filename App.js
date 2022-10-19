import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { COLORS, POST_DATA } from './components/constants';
import HomeScreen from './screens/HomeScreen';
import LivesScreen from './screens/LivesScreen';
import MarketScreen from './screens/MarketScreen';


export default function App() {
  const Tab = createBottomTabNavigator();
  
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle:{
            backgroundColor: COLORS.primary,
            borderTopColor: 'transparent'
          }
        }} >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false
          }} />
          <Tab.Screen name="Live" component={LivesScreen} options={{
            headerShown: false
          }} />
          <Tab.Screen name="Market" component={MarketScreen} options={{
            headerShown: false
          }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
// </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.secondary,
  }
});
