import React from "react";
import SearchBar from "../searchBar/search";
// import "./nav.css";

const Nav = ({onSearch})=>{
    return(
        <nav className="nav">
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav