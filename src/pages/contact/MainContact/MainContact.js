import FormContact from './FormContact'
import HeroImages  from '../../../Components/HeroImages'
import CallToActionShared from '../../../Components/CallToActionShared'
const MainContact = () => {
    return (
        <main className="main main__about">
           <FormContact />
           <div className="hero hero__contact">
               <HeroImages />
           </div>
           <CallToActionShared />
        </main>
    )
}
export default MainContact