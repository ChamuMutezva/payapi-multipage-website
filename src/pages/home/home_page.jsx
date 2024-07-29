import { Link } from "react-router-dom";
import SharedForm from "../../Components/FormShared";
import tesla from "../../assets/shared/desktop/tesla.svg";
import microsoft from "../../assets/shared/desktop/microsoft.svg";
import hewlett from "../../assets/shared/desktop/hewlett-packard.svg";
import oracle from "../../assets/shared/desktop/oracle.svg";
import google from "../../assets/shared/desktop/google.svg";
import nvidia from "../../assets/shared/desktop/nvidia.svg";
import Card from "../../Components/Card";
import CardImplementation from "../../assets/home/desktop/illustration-easy-to-implement.svg";
import PhoneUx from "../../assets/home/desktop/illustration-simple-ui.svg";
import PersonalFinances from "../../assets/home/desktop/icon-personal-finances.svg";
import Bankings from "../../assets/home/desktop/icon-banking-and-coverage.svg";
import Consumer from "../../assets/home/desktop/icon-consumer-payments.svg";

const HomePage = () => {
    return (
        <main className="main main__home">
            <div className="hero">
                <div className="hero__img__container">
                    <img
                        className="hero__img"
                        src="/assets/home/desktop/illustration-phone-mockup.svg"
                        alt="a transaction done with payapi app on mobile phone"
                    />
                </div>

                <div className={`hero__content`}>
                    <h1 className={`hero__title`}>
                        Start building with our APIs for absolutely free.
                    </h1>
                    <SharedForm desktopCentered={false} />
                    <p className={"hero__link__text"}>
                        Have any questions?
                        <Link to="/contact" className="hero--link">
                            {"  "}
                            Contact Us
                        </Link>
                    </p>
                </div>
            </div>

            <div className="primary__container">
                <div className="primary__image__container">
                    <div className="primary__images">
                        <img
                            className={`primary__tesla primary__img primary__img__home`}
                            src={tesla}
                            alt="tesla corporation private limited"
                        />
                        <img
                            className={`primary__microsoft primary__img primary__img__home`}
                            src={microsoft}
                            alt="microsoft corporation private limited"
                        />
                        <img
                            className={`primary__hewlett primary__img primary__img__home`}
                            src={hewlett}
                            alt="hewlett parkard corporation private limited"
                        />
                        <img
                            className={`primary__oracle primary__img primary__img__home`}
                            src={oracle}
                            alt="oracle corporation private limited"
                        />
                        <img
                            className={`primary__google primary__img primary__img__home`}
                            src={google}
                            alt="google corporation private limited"
                        />
                        <img
                            className={`primary__nvidia primary__img primary__img__home`}
                            src={nvidia}
                            alt="nvidia corporation private limited"
                        />
                    </div>
                </div>
                <div className="primary__signup">
                    <h2 className="primary__title">Who we work with</h2>

                    <p className="primary__summary">
                        Today, millions of people around the world have
                        successfully connected their accounts to apps they love
                        using our API. We provide developers with the tools they
                        need to create easy and accessible experiences for their
                        users.
                    </p>
                    <Link to="/about" className="link--btn">
                        About Us
                    </Link>
                </div>
            </div>

            <section className="secondary__cards">
                <div className="cards__one">
                    <div className={`secondary__card`}>
                        <div className={`card__holder`}>
                            <img
                                className={`card__img`}
                                src={CardImplementation}
                                alt="illustration on implementation"
                            />
                        </div>
                        <div className="card__description">
                            <h2 className={"card__title"}>Easy to implement</h2>

                            <p className="card__summary">
                                Our API comes with just a few lines of code.
                                You'll be up and running in no time. We built
                                our documentation page to integrate payments
                                functionality with ease.
                            </p>
                        </div>
                    </div>

                    <div className={`secondary__card`}>
                        <div className={`card__holder`}>
                            <img className={`card__img`} src={PhoneUx} alt="" />
                        </div>
                        <div className="card__description">
                            <h2 className={"card__title"}>Simple UI & UX</h2>

                            <p className="card__summary">
                                Our pre-built form is easy to integrate in your
                                app or website's checkout flow and designed to
                                optimize conversion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cards__two">
                    <Card
                        src={PersonalFinances}
                        alt="personal finances steps"
                        subtitle="Personal Finances"                        
                        summary=" Consolidate financial data from multiple sources and categorize transactions up to
                         2 years of history. Analyze reports to reconcile activities in your account."
                    />
                    <Card
                        src={Bankings}
                        alt="types of banking and coverage"
                        subtitle="Banking & Coverage"                    
                        summary="With our platform, you can speed up account onboarding and support ongoing payments 
                        for checking, savings, credit card, and brokerage accounts."
                    />
                    <Card
                        src={Consumer}
                        alt="banking payments systems"
                        subtitle="Consumer Payments"                        
                        summary="It's easier to set up secure bank payments with us through a flow designed with the 
                         user experience in mind. Customers could instantly authenticate their account."
                    />
                </div>
            </section>

            <div className={`hero__summary hero__summary__secondary`}>
                <h2 className={`header__title`}>Ready to start</h2>
                <SharedForm desktopCentered={true} />
            </div>
        </main>
    );
};
export default HomePage;
