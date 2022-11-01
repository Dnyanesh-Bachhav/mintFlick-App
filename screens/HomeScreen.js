import { View, FlatList, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import Header from '../components/HomeScreen/Header';
import Post from '../components/HomeScreen/Post';
import { COLORS, POST_DATA } from "../components/constants";
import { useEffect, useState } from "react";
import { getHomeFeedData } from "../services/requests";
function HomeScreen() {
    const[feedArray,setFeedArray] = useState([]);
    async function getData(){
        const data = await getHomeFeedData();
        setFeedArray(data);
        console.log(data);
    }
    useEffect(()=>{
        //   getHomeFeedData();
        getData();
    },[]);
    return (
        <View style={styles.container}>
            <Header />
            {
                feedArray ? 
            
            <FlatList
                data={feedArray}
                renderItem={({ item, index }) => (
                    <Post item={item} key={index} />
                )}
                keyExtractor={(item, index) => index}
            />
            : <ActivityIndicator size={"large"} />
                }
<StatusBar backgroundColor={COLORS.primary}  />

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.secondary,
    }
})
export default HomeScreen;