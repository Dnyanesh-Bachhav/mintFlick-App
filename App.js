import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { COLORS, POST_DATA } from './components/constants';
import Header from './components/HomeScreen/Header';
import Post from './components/HomeScreen/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      {/* {

        POST_DATA.map((item,index)=>(

          
        ))

      } */}
      <FlatList
      data={POST_DATA}
      renderItem={({item,index})=>(
        <Post item={item} key={index} />

      )}
      keyExtractor={(item,index)=>index}
      />
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
