import { FlatList, Dimensions, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { COLORS, CATEGORIES_IMAGES } from "../constants";

import bgmi from "../../assets/bgmi.jpg";
import fall_guys from "../../assets/fall_guys.jpg";
import fifa from "../../assets/fifa.png";
import fortnite from "../../assets/fortnite.jpg";
import rocket_league from "../../assets/rocket_league.jpg";
const SCROLLVIEW_HEIGHT = Dimensions.get('window').height / 4;
const SCROLLVIEW_WIDTH = Dimensions.get('window').width / 2.4;

function Categories() {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={CATEGORIES_IMAGES}
                renderItem={({item,index}) => (
                    <View className="h-2/4 w-2/5 ml-4 rounded-lg overflow-hidden" style={styles.cardStyle} key={index}>
                        <Image
                        source={{
                            uri: item.img_src,
                        }}
                        style={styles.imageStyle}
                        
                        />
                        <Text className="text-white font-bold absolute bottom-2 ml-2 ">{item.data}</Text>
                        {/* </ImageBackground> */}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    cardStyle:{
        width: SCROLLVIEW_WIDTH,
        height: SCROLLVIEW_HEIGHT,
    },
    imageStyle:{
        width: "auto",
        height: SCROLLVIEW_HEIGHT,
        resizeMode: "cover",
    },
    
});
export default Categories;