import { View, FlatList } from "react-native";
import Header from '../components/HomeScreen/Header';
import Post from '../components/HomeScreen/Post';
import { POST_DATA } from "../components/constants";
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
        <View>
            <Header />
            <FlatList
                data={feedArray}
                renderItem={({ item, index }) => (
                    <Post item={item} key={index} />
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default HomeScreen;