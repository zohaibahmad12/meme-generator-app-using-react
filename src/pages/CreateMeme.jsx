import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import MemeEditor from "../components/MemeEditor";
import MemeText from "../components/MemeText";


const CreateMeme = () => {

    const [textCount, setTextCount] = useState(0);

    const [searchParams] = useSearchParams();
    const imgUrl = searchParams.get("url");

    const addNewTextOnScreen=()=>{
        setTextCount(textCount+1);
    }

    return (
        <div className="create-meme-page">

                <MemeEditor imgUrl={imgUrl} />

                {
                    Array(textCount).fill(0).map((element) => {
                        return <MemeText />
                    })
                }

                <div className="buttons">
                    <button onClick={addNewTextOnScreen}>Add Text</button>
                    <button>Save</button>
                </div>

            </div>
            )

}


            export default CreateMeme;