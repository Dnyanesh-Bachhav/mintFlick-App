import user_dnyanesh from "../assets/Dnyanesh_Bachhav_Circular.png";
import monkey_asset from "../assets/monkey_asset.png";
import building from "../assets/building.jpg";
import iron_man from "../assets/iron_man.jpg";
const COLORS = {
    primary: "#0f172a",
    secondary: "#1e293b",
    white: "#fff",
    gray: "#94a3b8",
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
        username: "Dnyanesh_07",
        timestamp: "7 days ago",
        userDP: user_dnyanesh,
        descriptionText: "Post",
        subHeading: "Hey, How are you??",
        postImage: iron_man,
        postVideo: null,
        likeCount: 5,
        commentCount: 5

    }
]


export { COLORS, POST_DATA };