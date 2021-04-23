import Logo from '../../../assets/shared/desktop/logo.svg'
import Hamburger from '../../../assets/shared/mobile/menu.svg'
import Close from '../../../assets/shared/mobile/close.svg'
const AboutHeader = () => {
    return (
        <header>
            <nav>
                <div className="logo__wrapper">
                    <a className="logo--link" href="/">
                        <img src={Logo} alt="well come to payapi" />
                    </a>
                </div>
                <div className="menu__control">
                    <button className="hamburger">
                        <img  src={Hamburger} alt="open the menu"/>
                    </button>
                    <button>
                        <img src={Close} alt="close the menu"/>
                    </button>
                </div>

            </nav>
            <div className="hero">

            </div>

        </header>
    )
}
export default AboutHeader