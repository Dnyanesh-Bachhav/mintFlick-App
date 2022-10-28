import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../components/constants";

function NotificationScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25,color: COLORS.white}}>Notification</Text>
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

export default NotificationScreen;