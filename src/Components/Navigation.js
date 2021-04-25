import { useState } from 'react'
import Logo from '../assets/shared/desktop/logo.svg'
import Hamburger from '../assets/shared/mobile/menu.svg'
import Close from '../assets/shared/mobile/close.svg'
import Buttton from './Button'
const Navigation = () => {

    const [ShowMenu, setShowMenu] = useState(true)
    const hamburgerClick = () => {
        setShowMenu(!ShowMenu)
        console.log(ShowMenu)

    }
    return (
        <nav>
            <div className="logo__wrapper">
                <a className="logo--link" href="/">
                    <img src={Logo} alt="well come to payapi" />
                </a>
            </div>
            <div className={`modal ${ShowMenu ? "modal__open" : ""}`}>
                <ul className="nav__list">
                    <li className="nav__list__item">
                        <a href="/" className="anchor">
                            Pricing
                            </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="/" className="anchor">
                            about
                            </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="/" className="anchor">
                            contact
                            </a>
                    </li>
                    <li>
                        <Buttton />
                    </li>
                </ul>
                {/*
             .toggle__btn__close {
        display: block;
    }
    .toggle__btn__open {
        display: none;
    }
            */}

            </div>
            <div className="menu__control">
                <button className={`hamburger ${ShowMenu ? "toggle__btn__close" : "toggle__btn__open"}`} onClick={hamburgerClick}>
                    <img src={Hamburger} alt="open the menu" />
                </button>
                <button className={`close__menu ${ShowMenu ? "toggle__btn__open" : "toggle__btn__close"}`} onClick={hamburgerClick}>
                    <img src={Close} alt="close the menu" />
                </button>
            </div>
        </nav>
    )
}
export default Navigation