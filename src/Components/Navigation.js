import Logo from '../assets/shared/desktop/logo.svg'
import Hamburger from '../assets/shared/mobile/menu.svg'
import Close from '../assets/shared/mobile/close.svg'
import Buttton from './Button'
const Navigation = () => {
    return (
        <nav>
            <div className="logo__wrapper">
                <a className="logo--link" href="/">
                    <img src={Logo} alt="well come to payapi" />
                </a>
            </div>
            <div className="modal">
                <ul className="nav__list">
                    <li className="nav__list__item">
                        <a href="/">
                            Pricing
                            </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="/">
                            about
                            </a>
                    </li>
                    <li className="nav__list__item">
                        <a href="/">
                            contact
                            </a>
                    </li>
                    <li>
                        <Buttton />
                    </li>
                </ul>


            </div>
            <div className="menu__control">
                <button className="hamburger">
                    <img src={Hamburger} alt="open the menu" />
                </button>
                <button className="close__menu">
                    <img src={Close} alt="close the menu" />
                </button>
            </div>
        </nav>
    )
}
export default Navigation