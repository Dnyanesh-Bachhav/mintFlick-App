import { Text, View, StyleSheet } from "react-native";

function MarketScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25}} >Market</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MarketScreen;