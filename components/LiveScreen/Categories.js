import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

const SCROLLVIEW_HEIGHT = Dimensions.get('window').height / 4;
function Categories() {
    return (
        <View style={styles.container}>
            <Text>Hello World...!!!</Text>
            <FlatList
                horizontal={true}
                data={[10, 20, 30, 40, 50]}
                renderItem={() => (
                    <View className="h-2/4 w-2/5 border-2 border-orange-400 " >
                        <Text>Data</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    }
});
export default Categories;