import Hero from '../../Components/HeroComponent'
import Secondary from './Secondary'
import CallToAction from '../../Components/CallToActionShared'
const Main = () => {
    return (
        <main className="main main__home">
            <Hero />
            <Secondary />
            <CallToAction />
        </main>
    )
}
export default Main