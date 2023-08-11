import React from "react";
import { NavLink } from "react-router-dom";

const MainHeading = () => {

    return (

        <NavLink className="navlink" to={"/"}>
        <div className="main-heading">
            <h1>Meme Generator App</h1>
        </div>
        </NavLink>

    )

}
export default MainHeading;