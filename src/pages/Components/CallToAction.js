import { Link } from 'react-router-dom'
import FormShared from './FormShared'
import HeaderTitle from './HeaderTitle'
const CallToAction = (props) => {

    const summaryShared = props.summaryShared ? "cta__summary__shared" : ""
    return (
        <div className={`cta__summary ${summaryShared}`}>
            <HeaderTitle title="Start building with our APIs for absolutely free." />
            <FormShared />
            {/*         
            <p className="cta__questions">
                Have any questions?
                <Link to="/contact" className="anchor cta__summary--anchor">Contact Us</Link>
            </p>
            */}
            {props.questions && <p className={'cta__questions'}>
                Have any questions?
                <Link to="/contact" className="anchor cta__summary--anchor">Contact Us</Link>
            </p>}
        </div>
    )
}
export default CallToAction
