import React  from "react";
import '../web1/styles.css'

const date = new Date();
var time = date.getFullYear();

function Footer() {
    return  <div>
                <p>copyright Tinsel19 @ {time}</p>
            </div>
}

export default Footer;