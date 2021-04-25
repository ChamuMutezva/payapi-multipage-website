import Navigation from '../../../Components/Navigation'
import Button from '../../../Components/Button'
import Phone_img from '../../../assets/home/desktop/illustration-phone-mockup.svg'
const AboutHeader = () => {
    return (
        <header>
            <Navigation />
            <div className="hero">
                <div className="hero__container">
                    <img className="hero__img" src={Phone_img} alt="payapi in action on mobile phone" />
                </div>
                <div className="hero__summary">
                    <h1 className="hero__title">Start building with our APIs for absolutely free.</h1>
                    <form>
                        <input type="email" className="email" name="" id="email" placeholder="Enter email address" />
                        <Button />
                    </form>
                </div>
            </div>

        </header>
    )
}
export default AboutHeader
