import React from "react";
const MemeEditor = ({ imgUrl }) => {

    return (
        <div className="meme-editor">
            <div className="empty-area"></div>
            <div className="meme-img">
            <img src={imgUrl} alt="" />
            </div>
            <div className="empty-area"></div>
        </div>
    );
}

export default MemeEditor;