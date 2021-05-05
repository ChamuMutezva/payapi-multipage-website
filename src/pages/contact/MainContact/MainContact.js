import FormContact from './FormContact'
import HeroImages from '../../../Components/HeroImages'
import CallToActionShared from '../../../Components/CallToActionShared'
const MainContact = () => {
    return (
        <main className="main main__about main__contact">
            <div className="contact__primary">
                <FormContact />
                <div className="hero hero__contact">
                    <HeroImages title="Join the thousands of innovators already building with us"/>
                </div>
            </div>
            <CallToActionShared />
        </main>
    )
}
export default MainContact