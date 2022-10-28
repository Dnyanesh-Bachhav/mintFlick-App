import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';

import { COLORS, POST_DATA } from './components/constants';
import HomeScreen from './screens/HomeScreen';
import LivesScreen from './screens/LivesScreen';
import MarketScreen from './screens/MarketScreen';
import NotificationScreen from './screens/NotificationScreen';
import SearchScreen from './screens/SearchScreen';


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
                {
                  focused ? 
                
                <LinearGradient colors={['#a36cfc', '#3b5998', '#2ce8e5']} start={{ x: 0.1,y:2 }} style={styles.gradientStyle}>
                  <Image source={require("./assets/Home.png")} style={{
                  tintColor: COLORS.white,
                  ...styles.imgStyle}}/>
                 
                  {/* <Text style={{color: COLORS.white}} >Home</Text> */}
                </LinearGradient>
                :  <Image source={require("./assets/Home.png")} style={{
                  tintColor: COLORS.white,
                  ...styles.imgStyle}}/>
                }
              </View>
          )
      
          }} />
          <Tab.Screen name="Live" component={LivesScreen} options={{
            tabBarIcon: ({focused})=>(
              <View style={styles.tabOption}>
                {
                  focused ? 
                
                <LinearGradient colors={['#a36cfc', '#3b5998', '#2ce8e5']} start={{ x: 1,y:0.2 }} style={styles.gradientStyle}>

                  <Image source={require("./assets/live.png")} style={{
                    tintColor: COLORS.white,
                    ...styles.imgStyle}}/>
                  {/* <Text style={{color: COLORS.white}} >Home</Text> */}
                </LinearGradient>
                : <Image source={require("./assets/live.png")} style={{
                  tintColor: COLORS.white,
                  ...styles.imgStyle}}/>
                }
              </View>
          ),
      
            headerShown: false
          }} />
          <Tab.Screen name="Market" component={MarketScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused})=>(
              <View style={styles.tabOption}>
                {
                  focused ? 
                <LinearGradient colors={['#a36cfc', '#3b5998', '#2ce8e5']} start={{ x: 1,y:0.2 }} style={styles.gradientStyle}>

                  <Image source={require("./assets/party.png")} style={{
                    tintColor: COLORS.white,
                    ...styles.imgStyle}}/>
                  {/* <Text style={{color: COLORS.white}} >Home</Text> */}
                </LinearGradient>
                : <Image source={require("./assets/party.png")} style={{
                  tintColor: COLORS.white,
                  ...styles.imgStyle}}/>
                }
              </View>
          )
      
          }} />
          <Tab.Screen name="Search" component={SearchScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused})=>(
              <View style={styles.tabOption}>
                {
                  focused ? 
                <LinearGradient colors={['#a36cfc', '#3b5998', '#2ce8e5']} start={{ x: 1,y:0.2 }} style={styles.gradientStyle}>

                  <Image source={require("./assets/search.png")} style={{
                    tintColor: COLORS.white,
                    ...styles.imgStyle}}/>
                  {/* <Text style={{color: COLORS.white}} >Home</Text> */}
                </LinearGradient>
                : <Image source={require("./assets/search.png")} style={{
                  tintColor: COLORS.white,
                  ...styles.imgStyle}}/>
                }
              </View>
          )
      
          }} />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused})=>(
              <View style={styles.tabOption}>
                {
                  focused ? 
                <LinearGradient colors={['#a36cfc', '#3b5998', '#2ce8e5']} start={{ x: 1,y:0.2 }} style={styles.gradientStyle}>

                  <Image source={require("./assets/notification.png")} style={{
                    tintColor: COLORS.white,
                    ...styles.imgStyle}}/>
                  {/* <Text style={{color: COLORS.white}} >Home</Text> */}
                </LinearGradient>
                : <Image source={require("./assets/notification.png")} style={{
                  tintColor: COLORS.white,
                  ...styles.imgStyle}}/>
                }
              </View>
          )
      
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
},
gradientStyle:{
  paddingVertical: 8,
  paddingHorizontal: 15,
  borderRadius: 5
}
});
