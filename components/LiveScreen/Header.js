import { View, StyleSheet, Text, Image } from "react-native";
import cover from "../../assets/cover.png";
import monkey_asset from "../../assets/monkey_asset.png";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../constants";
// Live Screen
function Header(){
    return(
        <View style={styles.container} >
            <View style={styles.imgContainer}><Image source={cover} style={styles.imgStyle}  /></View>
            <View><Image source={monkey_asset} style={styles.imgStyle2} /></View>
            <View><Ionicons name="chatbox-ellipses-outline" size={28} color={COLORS.white} /></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: COLORS.primary,
    },
    imgStyle:{

        width: 50,
        height: 50,
        resizeMode: "cover"
    },
    imgStyle2:{

        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    imgContainer:{
        borderRadius: 100,
        // borderWidth: 1,
        overflow: "hidden"
    },

});

export default Header;