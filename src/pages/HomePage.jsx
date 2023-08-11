import React, { useEffect,useState } from "react";
import MemeCard from "../components/MemeCard";
import MainHeading from "../components/MainHeading";
import fetchAllMemes from "../api/fetchAllMemes";

const HomePage = () => {

    const [allMemes,setAllMemes]=useState([]);
    const getAllMemes = async () => {

      const data=  await fetchAllMemes();
      setAllMemes(data);
    }
    
    useEffect(() => {
      getAllMemes();
    }, []);


    return (
        <div className="home-page">

            <MainHeading />
            <div className="all-memes">
                {
                    allMemes.map((currentMeme)=>{
                        return <MemeCard key={currentMeme.id} meme={currentMeme}/>
                    })
                }
            </div>
        </div>
    )

}
export default HomePage;