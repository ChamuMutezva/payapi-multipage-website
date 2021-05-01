import Hero from './Hero'
import Secondary from './Secondary'
import CallToActionShared from '../../../Components/CallToActionShared'
const Main = () => {
    return (
        <main className="main main__home">
            <Hero />
            <Secondary />
            <CallToActionShared />
        </main>
    )
}
export default Main