import { View, FlatList } from "react-native";
import Header from '../components/HomeScreen/Header';
import Post from '../components/HomeScreen/Post';
import { POST_DATA } from "../components/constants";
function HomeScreen(){
    return(
        <View>
            <Header/>
      
      <FlatList
      data={POST_DATA}
      renderItem={({item,index})=>(
        <Post item={item} key={index} />

      )}
      keyExtractor={(item,index)=>index}
      />
        </View>
    );
}

export default HomeScreen;