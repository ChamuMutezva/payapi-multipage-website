import { useState } from 'react'
import Logo from '../assets/shared/desktop/logo.svg'
import Hamburger from '../assets/shared/mobile/menu.svg'
import Close from '../assets/shared/mobile/close.svg'
import Buttton from './Button'
import NavListItems from './NavList'
const Navigation = () => {

    const [ShowMenu, setShowMenu] = useState(false)
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
                
                <NavListItems />
                <Buttton secondary={true}/>
            </div>
            <div className="menu__control">
                <button className={`hamburger ${ShowMenu ? "toggle__btn__open" : "toggle__btn__close"}`} onClick={hamburgerClick}>
                    <img src={Hamburger} alt="open the menu" />
                </button>
                <button className={`close__menu ${ShowMenu ? "toggle__btn__close" : "toggle__btn__open"}`} onClick={hamburgerClick}>
                    <img src={Close} alt="close the menu" />
                </button>
            </div>
        </nav>
    )
}
export default Navigation