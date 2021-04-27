import Navigation from '../../../Components/Navigation'
import CallToAction from '../../../Components/CallToAction'
import Phone_img from '../../../assets/home/desktop/illustration-phone-mockup.svg'
const HomeHeader = () => {
    return (
        <header>
            <Navigation />
            <div className="cta">
                <div className="cta__container">
                    <img className="cta__img" src={Phone_img} alt="payapi in action on mobile phone" />
                </div>
                <CallToAction ctaTitle="Start building with our APIs for absolutely free."/>
            </div>

        </header>
    )
}
export default HomeHeader
