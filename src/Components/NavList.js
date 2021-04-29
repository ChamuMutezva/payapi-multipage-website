const NavListItems = (props) => {
    const footerList = props.footerList ? "js__footer__list" : ""
    return (
        <ul className={`nav__list ${footerList}`}>
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

        </ul>
    )
}
export default NavListItems