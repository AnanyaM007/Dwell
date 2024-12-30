import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>Dwell</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>
            </div>
            <div className="right">
                <Link to="/login">Login</Link>
                <Link to="/register" className="register">Register</Link>
                <div className="menuIcon">
                    <img src="/menu.png" alt="Menu Icon" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register" className="register">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
