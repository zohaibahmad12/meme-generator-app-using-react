import React from "react";
import { NavLink } from "react-router-dom";

const MemeCard = ({ meme }) => {

    return (
        <NavLink to={`/createMeme?url=${meme.url}`}>
            <div className="meme-card">
                <img src={meme.url} alt="" />
                <p>{meme.name}</p>
            </div>
        </NavLink>
    )
}


export default MemeCard;