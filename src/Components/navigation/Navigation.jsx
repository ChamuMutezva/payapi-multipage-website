import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/shared/desktop/logo.svg";
import Hamburger from "../../assets/shared/mobile/menu.svg";
import Close from "../../assets/shared/mobile/close.svg";
import Buttton from "../Button";
import NavListItems from "../NavList";
const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const hamburgerClick = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    };
    return (
        <nav aria-label="main navigation">
            <div className="logo__wrapper">
                <Link to="/" className="logo--link">
                    <img src={Logo} alt="well come to payapi" />
                    <span className="sr-only"> payapi home</span>
                </Link>
            </div>
            <div className="menu__control">
                <button
                    className={`hamburger ${
                        showMenu ? "toggle__btn__open" : "toggle__btn__close"
                    }`}
                    aria-controls="main-menu"
                    aria-expanded={!!showMenu}
                    onClick={hamburgerClick}
                >
                    <img
                        src={showMenu ? Close : Hamburger}
                        alt="open the menu"
                    />
                </button>
            </div>
            <div
                id="main-menu"
                className={`modal ${showMenu ? "modal__open" : ""}`}
            >
                <NavListItems />
                <Buttton secondary={true} title="Schedule a demo" />
            </div>
        </nav>
    );
};
export default Navigation;
