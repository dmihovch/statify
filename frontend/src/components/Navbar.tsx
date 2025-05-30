import NavButton from "./NavButton";
import "../styles/Navbar.css"

function Navbar(){

    return (
        <nav>
            <NavButton path="/" text="Home"/>
            <NavButton path="/user-profile" text="Profile" />
            <NavButton path="/artist-stats" text="Artist Stats" />
        </nav>
    );
}

export default Navbar;