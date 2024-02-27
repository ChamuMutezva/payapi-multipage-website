import Hero from "../../Components/HeroComponent";
import Phone_img from "../../assets/home/desktop/illustration-phone-mockup.svg";
import Secondary from "./Secondary";
import CallToAction from "../../Components/CallToAction";
const HomePage = () => {
    return (
        <main className="main main__home">
            <div className="cta">
                <div className="cta__container">
                    <img
                        className="cta__img"
                        src={Phone_img}
                        alt="payapi in action on mobile phone"
                    />
                </div>
                <CallToAction title="Start building with our APIs for absolutely free." questions={true} />
            </div>

            <Hero />
            <Secondary />
            <CallToAction title="Ready to start" />
        </main>
    );
};
export default HomePage;
