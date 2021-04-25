import Navigation from '../../../Components/Navigation'
import Button from '../../../Components/Button'
import Phone_img from '../../../assets/home/desktop/illustration-phone-mockup.svg'
const HomeHeader = () => {
    return (
        <header>
            <Navigation />
            <div className="hero">
                <div className="hero__container">
                    <img className="hero__img" src={Phone_img} alt="payapi in action on mobile phone" />
                </div>
                <div className="hero__summary">
                    <h1 className="hero__title">Start building with our APIs for absolutely free.</h1>
                    <form className="form">
                        <label className="sr-only" htmlFor="email">Email (Required):</label>
                        <input type="email"
                            className="email" name="email"
                            id="email" required aria-required="true"
                            placeholder="Enter email address" />
                        <Button primary={true}/>
                        <p className="form__questions">
                            Have any questions? 
                              <a href="/" className="anchor form__anchor">
                                Contact Us
                                  </a>
                        </p>
                    </form>
                </div>
            </div>

        </header>
    )
}
export default HomeHeader
