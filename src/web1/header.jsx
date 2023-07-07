import React  from "react";
import './styles.css';
import { greeting } from "./note";


function Header() {
    return <div className="header">
                <h1>To-do list</h1>
                <p className="greeting">{greeting}</p>
           </div>
}

export default Header;