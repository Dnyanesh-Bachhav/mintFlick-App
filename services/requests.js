import axios from 'axios';

const getHomeFeedData = async function(){
    try{
        const response = axios.get("https://server.mintflick.app/feed");
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
export {getHomeFeedData};