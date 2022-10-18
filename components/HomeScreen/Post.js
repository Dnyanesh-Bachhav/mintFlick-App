import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import user from "../../assets/Dnyanesh_Bachhav_Circular.png";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLORS } from "../constants";
const POST_CONTENT_HEIGHT = Dimensions.get('window').height / 2;
function Post({item}){
    return(
        <View style={styles.container}>
            <PostInfo item={item} />
            <PostDetails item={item} />
            <PostActions item={item} />
        </View>
    );
}
function PostDetails({item}){
    return(
        <View style={styles.detailsContainer}>
            <Text style={styles.descriptionText}>{item.descriptionText}</Text>
            <Text style={styles.subHeading}>{item.subHeading}</Text>
            {
                item.postImage != null ? <Image source={item.postImage} style={{width: '100%',height: POST_CONTENT_HEIGHT,resizeMode: 'contain'}} /> : null
            }
        </View>
    );
}
function PostActions(){
    return(
        <View style={styles.actionContainer}>
            {/* import { FontAwesome } from '@expo/vector-icons'; */}
            <View style={styles.action}><FontAwesome name="heart" size={20} color="red" /><Text style={styles.counterTextStyle}>5</Text></View>
            {/* <View><FontAwesome name="heart-o" size={20} color="black" /></View> */}
            <View style={{...styles.action,marginLeft: 15}}><FontAwesome5 name="comment-dots" size={20} color={COLORS.white} /><Text style={styles.counterTextStyle}>5</Text></View>
            <View style={{...styles.action,marginLeft: 15}}><Feather name="share-2" size={20} color={COLORS.white} /></View>
        </View>
    );
}
function PostInfo(){
    return(
        <View style={styles.postContainer}>
            <View style={{flexDirection: 'row',alignItems: 'center'}} >

                <View style={styles.imgContainer}><Image source={user} style={styles.imgStyle}  /></View>
                <View style={styles.userInfo}>
                    <Text style={{color: COLORS.white,fontWeight: 'bold',fontSize: 15}}>Dnyanesh_07</Text>
                    <Text style={{color: COLORS.gray,fontSize: 12}}>7 days ago</Text>
                </View>
            </View>
            <View style={{ alignSelf: 'center'}} ><MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.white}/></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        color: COLORS.white,
        paddingBottom: 10,
        borderBottomWidth: 2,
        marginTop: 10,
        borderBottomColor: COLORS.primary,

    },
    postContainer:{
        // flex: 1,
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsContainer:{
        marginTop: 10,
        marginBottom: 10
    },
    descriptionText:{
        color: COLORS.white,
    },
    subHeading:{
        marginTop: 10,
        color: COLORS.gray,
    },
    userInfo:{
        color: COLORS.white,
        marginLeft: 10
    },
    actionContainer:{
        flexDirection: 'row',
        marginTop: 8
    },
    action:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterTextStyle:{
        marginLeft: 5,
        color: COLORS.white,
    },
    imgStyle:{

        width: 50,
        height: 50,
        resizeMode: "cover"
    },
    imgContainer:{
        borderRadius: 100,
        // borderWidth: 1,
        overflow: "hidden"
    },
    descriptionText: {
        color: COLORS.white,
    }
})

export default Post;