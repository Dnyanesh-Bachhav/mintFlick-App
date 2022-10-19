import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLORS } from "../constants";
import { Video } from "expo-av";
import { useRef, useState } from "react";
const POST_CONTENT_HEIGHT = Dimensions.get('window').height / 1.6;
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
    const video = useRef(null);
    const videoExtensions = ['.mp4','.ogg'];
    const[status,setStatus] = useState({});
    const extension = item.content.link.split(".")[1];
    function checkIsVideo(){
        if(item.content.link.includes(extension))
        {
            return true;
        }
        else{
            return false;
        }

    }
    return(
        <View style={styles.detailsContainer}>
            
            {
                item.content.announcement != null ? <Text style={styles.descriptionText}>{item.content.announcement}</Text> : null
            }
            {
                item.content.videoName != null ? <Text style={styles.descriptionText}>{item.content.videoName}</Text> : null
            }
            {
                item.content.description != null ? <Text style={styles.subHeading}>{item.content.description}</Text> : null
            }
            
            {
                item.content.post_image != null ? <Image source={{ uri: item.content.post_image}} style={{width: '100%',height: POST_CONTENT_HEIGHT,resizeMode: 'cover',marginTop: 10,borderRadius: 10}} /> : null
            }
            {
                checkIsVideo()
                ?
                <Video
                    ref={video}
                    style={styles.videoStyle}
                    source={{
                        uri: item.content.link
                    }}
                    useNativeControls
                    posterSource={{ uri: item.content.videoImage}}
                    posterStyle={{width: 100,height: 100}}
                    resizeMode="contain"
                />
                : null
            }
        </View>
    );
}
function PostActions({item}){
    return(
        <View style={styles.actionContainer}>
            {/* import { FontAwesome } from '@expo/vector-icons'; */}
            <View style={styles.action}><FontAwesome name="heart" size={20} color="red" /><Text style={styles.counterTextStyle}>{item.content.likes.length}</Text></View>
            {/* <View><FontAwesome name="heart-o" size={20} color="black" /></View> */}
            <View style={{...styles.action,marginLeft: 15}}><FontAwesome5 name="comment-dots" size={20} color={COLORS.white} /><Text style={styles.counterTextStyle}>{ item.content.comments != null ? item.content.comments.length : 0 }</Text></View>
            <View style={{...styles.action,marginLeft: 15}}><Feather name="share-2" size={20} color={COLORS.white} /></View>
        </View>
    );
}
function PostInfo({item}){
    return(
        <View style={styles.postContainer}>
            <View style={{flexDirection: 'row',alignItems: 'center'}} >

                <View style={styles.imgContainer}>
                {
                    item.profile_image === "" ? <View style={styles.userProfileContainer}><Text style={styles.userProfileImageText}>{item.username[0].toUpperCase() }</Text></View> : <Image source={{ uri: item.profile_image}} style={styles.imgStyle}  />
                }    
                    
                </View>
                <View style={styles.userInfo}>
                    <Text style={{color: COLORS.white,fontWeight: 'bold',fontSize: 15}}>{item.username}</Text>
                    <Text style={{color: COLORS.gray,fontSize: 12}}>{item.timestamp}</Text>
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
    userProfileContainer:{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
    },
    userProfileImageText:{
        fontSize: 32,
        alignSelf: 'center',
        color: COLORS.grayWhite,
    },
    imgContainer:{
        borderRadius: 100,
        // borderWidth: 1,
        overflow: "hidden"
    },
    descriptionText: {
        color: COLORS.white,
    },
    videoStyle:{
        marginTop: 10,
        width: '100%',
        height: POST_CONTENT_HEIGHT
    }
})

export default Post;