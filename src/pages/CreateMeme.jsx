import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import MemeEditor from "../components/MemeEditor";
import MemeText from "../components/MemeText";
import { exportComponentAsJPEG } from "react-component-export-image";


const CreateMeme = () => {

    const [textCount, setTextCount] = useState(0);
    const memeRef = useRef();

    const [searchParams] = useSearchParams();
    const imgUrl = searchParams.get("url");

    const addNewTextOnScreen = () => {
        setTextCount(textCount + 1);
    }
    const saveImageToDevice = () => {
        exportComponentAsJPEG(memeRef);
    }

    return (
        <div className="create-meme-page">

            <div ref={memeRef} className="download-div">
                <MemeEditor memeRef={memeRef} imgUrl={imgUrl} />

                {
                    Array(textCount).fill(0).map((element) => {
                        return <MemeText />
                    })
                }

            </div>

            <div className="buttons">
                <button onClick={addNewTextOnScreen}>Add Text</button>
                <button onClick={saveImageToDevice}>Save</button>
            </div>

        </div>
    )

}


export default CreateMeme;