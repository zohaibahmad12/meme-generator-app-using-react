
const fetchAllMemes=async()=>{

    const response=await fetch("https://api.imgflip.com/get_memes");
    const allmemes=await response.json();
    return allmemes.data.memes;
}

export default fetchAllMemes;