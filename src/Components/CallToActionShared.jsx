import FormShared from './FormShared'
import HeaderTitle from './HeaderTitle'
const CallToActionShared = (props) => {   
    return (
        <div className="cta__summary cta__summary__shared">         
            <HeaderTitle subTitle="Ready to start"/>
            <FormShared />
        </div>
    )
}
export default CallToActionShared
