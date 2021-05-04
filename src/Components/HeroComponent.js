import { Link } from "react-router-dom"
import tesla from "../assets/shared/desktop/tesla.svg"
import microsoft from "../assets/shared/desktop/microsoft.svg"
import hewlett from "../assets/shared/desktop/hewlett-packard.svg"
import oracle from "../assets/shared/desktop/oracle.svg"
import google from "../assets/shared/desktop/google.svg"
import nvidia from "../assets/shared/desktop/nvidia.svg"
const HeroComponent = () => {
    return (
        <section className="hero__container">
            <div className="hero">
                <div className="hero__images">
                    <img className="hero__tesla hero__img" src={tesla} alt="tesla corporation private limited" />
                    <img className="hero__microsoft hero__img" src={microsoft} alt="microsoft corporation private limited" />
                    <img className="hero__hewlett hero__img" src={hewlett} alt="hewlett parkard corporation private limited" />
                    <img className="hero__oracle hero__img" src={oracle} alt="oracle corporation private limited" />
                    <img className="hero__google hero__img" src={google} alt="google corporation private limited" />
                    <img className="hero__nvidia hero__img" src={nvidia} alt="nvidia corporation private limited" />
                </div>
                <div className="hero__signup">
                    <h2 className="hero__title">
                        Who we work with
                    </h2>

                    <p className="hero__summary">
                        Today, millions of people around the world have successfully connected
                        their accounts to apps they love using our API. We provide developers
                        with the tools they need to create easy and accessible experiences
                        for their users.
                    </p>
                    <Link to="/about" className="link--btn">About Us</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroComponent