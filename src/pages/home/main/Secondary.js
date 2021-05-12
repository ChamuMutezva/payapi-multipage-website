import Card from "../../Components/Card"
//import Card2 from "../../../Components/Card2"
import CardImplementation from "../../../assets/home/desktop/illustration-easy-to-implement.svg"
import PhoneUx from "../../../assets/home/desktop/illustration-simple-ui.svg"
import PersonalFinances from "../../../assets/home/desktop/icon-personal-finances.svg"
import Bankings from "../../../assets/home/desktop/icon-banking-and-coverage.svg"
import Consumer from "../../../assets/home/desktop/icon-consumer-payments.svg"

const Secondary = () => {
    return (
        <section className="secondary__cards">
            <div className="cards__one">
                <Card src={CardImplementation} alt="illustration on implementation"                     
                    title="Easy to implement"
                    summary="Our API comes with just a few lines of code. You’ll be up and running in
                             no time. We built our documentation page to integrate payments functionality
                             with ease."
                />
                <Card src={PhoneUx} alt=""
                    title="Simple UI & UX"
                    summary="Our pre-built form is easy to integrate in your app or website’s checkout 
                            flow and designed to optimize conversion."
                />
            </div>
            <div className="cards__two">
                <Card src={PersonalFinances} alt="personal finances steps"                        
                         subtitle="Personal Finances" primary={true}
                         summary=" Consolidate financial data from multiple sources and categorize transactions up to
                         2 years of history. Analyze reports to reconcile activities in your account."/>
                <Card src={Bankings} alt="types of banking and coverage" 
                         subtitle="Banking & Coverage" primary={true}
                         summary="With our platform, you can speed up account onboarding and support ongoing payments 
                        for checking, savings, credit card, and brokerage accounts."/>
                <Card src={Consumer} alt="banking payments systems" 
                         subtitle="Consumer Payments" primary={true}
                         summary="It’s easier to set up secure bank payments with us through a flow designed with the 
                         user experience in mind. Customers could instantly authenticate their account."/>

            </div>

        </section>
    )
}
export default Secondary