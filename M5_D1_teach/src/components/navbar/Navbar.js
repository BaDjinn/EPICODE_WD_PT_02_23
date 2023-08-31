import React, {Component} from "react";
import "./navbar.css"
import ListItem from "../ListItem/ListItem";
import Logo from "../Logo/Logo";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Logo />
                <div>
                    <ul className="nav-links">
                        <ListItem text="testo 1" />
                        <ListItem text="testo 2" />
                        <ListItem text="testo 3" />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;