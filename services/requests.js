import axios from 'axios';

const getHomeFeedData = async function(){
    try{
        const response = await axios.get("https://server.mintflick.app/feed");
        // const d1 =  response.json();
        // console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
export {getHomeFeedData};