import { Link } from "react-router-dom"
import Button from './Button'
import HeaderTitle from './HeaderTitle'
const CallToAction = (props) => {
    return (
        <div className="cta__summary">           
            <HeaderTitle title="Start building with our APIs for absolutely free."/>
            <form className="form">
                <label className="sr-only" htmlFor="email">Email (Required):</label>
                <input type="email"
                    className="email" name="email"
                    id="email" required aria-required="true"
                    placeholder="Enter email address" />
                <Button primary={true} />
                <p className="form__questions">
                    Have any questions?
                   <Link to="/contact" className="anchor form__anchor">Contact Us</Link>
                </p>
            </form>
        </div>
    )
}
export default CallToAction
