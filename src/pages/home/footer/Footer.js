import { Link } from "react-router-dom"
import NavListItems from "../../../Components/NavList"
import Logo from '../../../assets/shared/desktop/logo.svg'
import Facebook from '../../../assets/shared/desktop/facebook.svg'
import Twitter from '../../../assets/shared/desktop/twitter.svg'
import LinkeIn from '../../../assets/shared/desktop/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/" className="logo--link">
                <img className="footer__logo" src={Logo} alt="well come to payapi" />
            </Link>
            <NavListItems footerList={true} />
            <div className="social__icons">
                <a className="anchor" href="/"><img src={Facebook} alt="visit us on facebook" /></a>
                <a className="anchor" href="/"><img src={Twitter} alt="chat with us on twitter" /></a>
                <a className="anchor" href="/"><img src={LinkeIn} alt="connect us with on linkeid" /></a>
            </div>
        </footer>
    )
}
export default Footer