import { Link } from "react-router-dom";

const Footer = () => {
    const Logo = "assets/shared/desktop/logo.svg";
    const Facebook = "assets/shared/desktop/facebook.svg";
    const Twitter = "assets/shared/desktop/twitter.svg";
    const LinkeIn = "assets/shared/desktop/linkedin.svg";

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer__nav">
                    <Link to="/" className="logo-wrapper__link">
                        <img
                            className="footer__logo"
                            src={Logo}
                            alt="well come to payapi"
                        />
                    </Link>
                    <nav className="footer-nav" aria-label="footer navigation">
                        <ul className={`nav__list__footer`}>
                            <li className="nav__list__item">
                                <Link to="/pricing" className="anchor">
                                    {" "}
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav__list__item">
                                <Link to="/about" className="anchor">
                                    about{" "}
                                </Link>
                            </li>
                            <li className="nav__list__item">
                                <Link to="/contact" className="anchor">
                                    {" "}
                                    contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="social__icons">
                    <a className="anchor" href="/">
                        <img src={Facebook} alt="visit us on facebook" />
                    </a>
                    <a className="anchor" href="/">
                        <img src={Twitter} alt="chat with us on twitter" />
                    </a>
                    <a className="anchor" href="/">
                        <img src={LinkeIn} alt="connect us with on linkeid" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
