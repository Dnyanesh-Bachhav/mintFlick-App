import user_dnyanesh from "../assets/Dnyanesh_Bachhav_Circular.png";
import monkey_asset from "../assets/monkey_asset.png";
import building from "../assets/building.jpg";
import iron_man from "../assets/iron_man.jpg";
import nilesh from "../assets/Nilesh.jpg";
import pubg from "../assets/pubg.jpg";
import suyog from "../assets/photo_3_circular.png";
import Android from "../assets/Android.png";
import Jetpack from "../assets/Jetpack.png";
import bgmi from "../assets/bgmi.jpg";
import fall_guys from "../assets/fall_guys.jpg";
import fifa from "../assets/fifa.png";
import fortnite from "../assets/fortnite.jpg";
import rocket_league from "../assets/rocket_league.jpg";
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
const CATEGORIES_IMAGES = [
    {
        img_src: "https://v2.mintflick.app/static/media/Bgmi.debabba9c3f464d19dfd.jpg",
        data: "Battleground Mobile India"
    },
    {
        img_src: "https://v2.mintflick.app/static/media/fallguys.e3dafcf517c07d54df59.webp",
        data: "Fall Guys"
    },
    {
        img_src: "https://v2.mintflick.app/static/media/Fifa.8aa47c1e52f734733c70.webp",
        data: "FIFA 2023"
    },
    {
        img_src: "https://v2.mintflick.app/static/media/Fortnite.f956f111dfcd40be0aca.jpg",
        data: "Fortnite"
    },
    {
        img_src: "https://v2.mintflick.app/static/media/Fortnite.f956f111dfcd40be0aca.jpg",
        data: "God Of War"
    }
];

export { COLORS, POST_DATA, CATEGORIES_IMAGES };







