import "./Navbar.scss";
import {useState} from "react";

function Navbar(){
    const [open,setOpen]=useState(false);
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>Dwell</span>
                </a>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/agents">Agents</a>
            </div>
            <div className="right">
                <a href="/login">Login</a>
                <a href="/register" className="register">Register</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="Menu Icon" onClick={()=>setOpen(!open)} />
                </div>
                <div className={open?"menu active":"menu"}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/agents">Agents</a>
                    <a href="/login">Login</a>
                    <a href="/register" className="register">Register</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;