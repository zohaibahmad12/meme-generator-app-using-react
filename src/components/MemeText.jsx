import React, { useState } from "react";
import Draggable from "react-draggable";


const MemeText = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [input, setInput] = useState("");

    const handleMemeTextToggle = () => {
        setIsEditable(!isEditable);
    }

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <Draggable>
            <div className="meme-text">
                {
                    (isEditable) ? <input placeholder="Add Text..." onDoubleClick={handleMemeTextToggle} type="text" value={input} onChange={handleInputChange} /> :
                       <p onDoubleClick={handleMemeTextToggle}>{(input)? input: "Double Click To Edit"}</p>
                }
            </div>
        </Draggable>
    )
}

export default MemeText;