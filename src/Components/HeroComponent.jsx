import { Link } from "react-router-dom"
import HeroImages from './HeroImages'
const HeroComponent = () => {
    return (
        <section className="primary__container">
            <div className="primary">
                <HeroImages heroHome={true} />
                <div className="primary__signup">
                    <h2 className="primary__title">
                        Who we work with
                    </h2>

                    <p className="primary__summary">
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