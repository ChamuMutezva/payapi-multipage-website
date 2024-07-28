import { Link } from "react-router-dom"
const NavListItems = (props) => {
    const footerList = props.footerList ? "js__footer__list" : ""
    return (
        <ul className={`nav__list ${footerList}`}>
            <li className="nav__list__item">
                <Link to="/pricing" className="anchor"> Pricing</Link>
            </li>
            <li className="nav__list__item">
                <Link to="/about" className="anchor">about </Link>
            </li>
            <li className="nav__list__item">
                <Link to="/contact" className="anchor"> contact</Link>
            </li>
        </ul>
    )
}
export default NavListItems