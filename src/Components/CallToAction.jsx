import { Link } from "react-router-dom";
import FormShared from "./FormShared";
import HeaderTitle from "./HeaderTitle";
const CallToAction = (props) => {
    const summaryShared = props.summaryShared ? "hero__summary__shared" : "";
    return (
        <div className={`hero__summary ${summaryShared}`}>
            <HeaderTitle title={props.title} />
            <FormShared />

            {props.questions && (
                <p className={"hero__questions"}>
                    Have any questions?
                    <Link to="/contact" className="anchor hero__summary--anchor">
                        Contact Us
                    </Link>
                </p>
            )}
        </div>
    );
};
export default CallToAction;
