import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';

import { COLORS, POST_DATA } from './components/constants';
import HomeScreen from './screens/HomeScreen';
import LivesScreen from './screens/LivesScreen';
import MarketScreen from './screens/MarketScreen';


export default function App() {
  const Tab = createBottomTabNavigator();
  
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:{
            backgroundColor: COLORS.primary,
            borderTopColor: 'transparent'
          }
        }} >
          <Tab.Screen name="Home" component={HomeScreen}
          
          options={{
            headerShown: false,
            tabBarIcon: ({focused})=>(
              <View style={styles.tabOption}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.tabOption}>

                  <Image source={require("./assets/Home.png")} style={{
                    tintColor: COLORS.white,
                    ...styles.imgStyle}}/>
                  {/* <Text style={{color: COLORS.white}} >Home</Text> */}
                </LinearGradient>
              </View>
          )
      
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
  },
  imgStyle:{
    width: 24,
    height: 24
  },
  tabOption:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
}
});
