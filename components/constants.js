import user_dnyanesh from "../assets/Dnyanesh_Bachhav_Circular.png";
import monkey_asset from "../assets/monkey_asset.png";
import building from "../assets/building.jpg";
import iron_man from "../assets/iron_man.jpg";
import nilesh from "../assets/Nilesh.jpg";
import pubg from "../assets/pubg.jpg";
import suyog from "../assets/photo_3_circular.png";
import Android from "../assets/Android.png";
import Jetpack from "../assets/Jetpack.png";
const COLORS = {
    primary: "#0f172a",
    secondary: "#1e293b",
    white: "#fff",
    gray: "#94a3b8",
    black: "#000",
    grayWhite: "#c5cedd",
}
const POST_DATA = [
    {
        username: "Dnyanesh_07",
        timestamp: "7 days ago",
        userDP: user_dnyanesh,
        descriptionText: "Post 1",
        subHeading: "Hey, How are you??",
        postImage: building,
        postVideo: null,
        likeCount: 5,
        commentCount: 5

    },
    {
        username: "Nilesh6336",
        timestamp: "2 days ago",
        userDP: nilesh,
        descriptionText: "#IRON MAN is love...",
        subHeading: "IRON MAN",
        postImage: iron_man,
        postVideo: null,
        likeCount: 20,
        commentCount: 12
    },
    {
        username: "Suyog_5656",
        timestamp: "4 days ago",
        userDP: suyog,
        descriptionText: "PUBG is coming back to India...",
        subHeading: "PUBG India",
        postImage: pubg,
        postVideo: null,
        likeCount: 45,
        commentCount: 4
    },
    {
        username: "Android",
        timestamp: "Just now",
        userDP: Android,
        descriptionText: "Jectpack Compose",
        subHeading: "Jetcpack 🚀🚀",
        postImage: Jetpack,
        postVideo: null,
        likeCount: 45,
        commentCount: 4
    }
]


export { COLORS, POST_DATA };