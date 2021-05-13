import FormShared from './FormShared'
import HeaderTitle from './HeaderTitle'
const CallToActionShared = (props) => {   
    return (
        <div className="cta__summary cta__summary__shared">
           {/* <h2 className="header__title">Ready to start</h2> */}
            <HeaderTitle subTitle="Ready to start"/>
            <FormShared />
        </div>
    )
}
export default CallToActionShared
