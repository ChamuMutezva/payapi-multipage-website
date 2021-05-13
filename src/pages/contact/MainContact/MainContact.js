import FormContact from './FormContact'
import HeroImages from '../../Components/HeroImages'
import CallToActionShared from '../../Components/CallToActionShared'
const MainContact = () => {
    return (
        <main className="main main__about main__contact">
            <div className="contact__primary">
                <FormContact />
                <div className="hero hero__contact">
                <h2 className="hero__title hero__title__contact">
                    Join the thousands of innovators already building with us
                </h2>
                    <HeroImages  />
                </div>
            </div>
            <CallToActionShared  />
        </main>
    )
}
export default MainContact