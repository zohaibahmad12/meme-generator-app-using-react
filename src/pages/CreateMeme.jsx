import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MemeEditor from "../components/MemeEditor";


const CreateMeme = () => {

    const [textCount,setTextCount]=useState(0);
    
    const [searchParams] = useSearchParams();
    const imgUrl = searchParams.get("url");

    return (
        <div className="create-meme-page">

            <MemeEditor imgUrl={imgUrl} />

            <div className="buttons">
                <button>Add Text</button>
                <button>Save</button>
            </div>
{
            Array(textCount).fill(0).map((element)=>{
                return <h1>Hello</h1>
            })
}
        </div>
    )

}


export default CreateMeme;