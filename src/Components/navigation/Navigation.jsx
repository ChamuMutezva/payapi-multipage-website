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
    };
    return (
        <nav aria-label="main navigation" className="nav">
            <div className="logo-wrapper">
                <Link to="/" className="logo-wrapper__link">
                    <img src={Logo} alt="well come to payapi" />
                    <span className="sr-only"> payapi home</span>
                </Link>
            </div>
            <div className="menu-control">
                <button
                    className={`menu-control__btn ${
                        showMenu ? "menu-control__btn-open" : "menu-control__btn-close"
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
                <NavListItems  onClick={hamburgerClick}/>
                <Buttton secondary={true} title="Schedule a demo" />
            </div>
        </nav>
    );
};
export default Navigation;
