import { Link } from "react-router-dom"
import { FreePlan, BasicPlan, PremiumPlan } from '../../../Components/DataList'
import Ticked from '../../../assets/shared/desktop/icon-check.svg'
import CallToActionShared from '../../../Components/CallToActionShared'
const Main = () => {

    return (
        <main className="main main__pricing">
            <div className="plans">

                {/* Free plan - first plan */}
                <div className="plan plan1">
                    <div className="sub__pricing">
                        <h2 className="pricing__title">Free Plan</h2>
                        <p className="paragraph pricing__summary">Build and test
                        using our core set of products with up to 100 API requests
                        </p>
                        <strong className="main__pricing__cost">$0.00</strong>
                    </div>

                    <div className="sub__pricing sub__pricing__list">
                        <ul className="plan__list">
                            {FreePlan.map(plan => {
                                return <li key={plan.id} className="plan__list__item">
                                    <img className={plan.classname} src={Ticked} alt={plan.alt} />
                                    <span className="transactions">{plan.action}</span>
                                </li>
                            })}
                        </ul>
                        <Link className="link--btn pricing__link--btn" to="/contact">Request Access </Link>
                    </div>
                </div>

                {/* plan number 2 basic plan*/}

                <div className="plan plan2">
                    <div className="sub__pricing">
                        <h2 className="pricing__title"> Basic Plan</h2>
                        <p className="paragraph pricing__summary">Launch your project with unlimited
                        requests and no contractual minimums
                        </p>
                        <strong className="main__pricing__cost">$249.00</strong>
                    </div>
                    <div className="sub__pricing sub__pricing__list">
                        <ul className="plan__list">
                            {BasicPlan.map(plan => {
                                return <li key={plan.id} className="plan__list__item">
                                    <img className={plan.classname} src={Ticked} alt={plan.alt} />
                                    <span className="transactions">{plan.action}</span>
                                </li>
                            })}

                        </ul>
                        <Link className="link--btn pricing__link--btn" to="/contact">Request Access </Link>
                    </div>
                </div>

                {/* plan number 3*/}

                <div className="plan plan2">
                    <div className="sub__pricing">
                        <h2 className="pricing__title"> Premium Plan</h2>
                        <p className="paragraph pricing__summary">Get tailored solutions, volume pricing, and dedicated support for your team
                </p>
                        <strong className="main__pricing__cost">$499.00</strong>
                    </div>
                    <div className="sub__pricing sub__pricing__list">
                        <ul className="plan__list">
                            {PremiumPlan.map(plan => {
                                return <li key={plan.id} className="plan__list__item">
                                    <img className={plan.classname} src={Ticked} alt={plan.alt} />
                                    <span className="transactions">{plan.action}</span>
                                </li>
                            })}
                        </ul>
                        <Link className="link--btn pricing__link--btn" to="/contact">Request Access </Link>
                    </div>
                </div>
            </div>

            <CallToActionShared />
        </main>
    )
}
export default Main