import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../components/constants";

function MarketScreen(){
    return(
        <View className="h-screen bg-alt bg-gradient-to-t from-blue-400 to-red-400">
            <Text style={{fontSize: 25,color: COLORS.white}}>Market</Text>
            <View className="p-5 bg-gradient-to-tr from-slate-600 to-red-400">
                <Text>Small BTN</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
    }
});

export default MarketScreen;