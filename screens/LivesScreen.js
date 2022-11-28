import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../components/constants";
import Categories from "../components/LiveScreen/Categories";
import Header from "../components/LiveScreen/Header";

function LivesScreen(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text style={{fontSize: 25,color: COLORS.white}}>Lives</Text>
            <View className="" style={styles.cardContainer}>
                <Text>Categories you'd like</Text>
                <Categories/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    cardContainer:{
        backgroundColor: COLORS.secondary,
    }
});

export default LivesScreen;