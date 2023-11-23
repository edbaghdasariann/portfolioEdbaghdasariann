import React from "react";
import "./header.css"
import {Link} from "react-router-dom" 

function Navbar() {
    return (
        <>
        <div className="general">
       <div className="forheader">

<div className="leftnav">
    <div className="forlogo">
        <h1 className="titlename">EdBaghdasarian</h1>
    </div>
</div>

<div class="rightnav">
    <div className="fordepartments"><Link  to="/" className="departments">Home</Link></div>
    <div className="fordepartments"><Link  to="/7" className="departments">About</Link></div>


</div>

</div>
</div>
        </> );
}

export default Navbar;
