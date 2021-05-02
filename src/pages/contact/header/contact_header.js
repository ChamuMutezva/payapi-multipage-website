import Navigation from '../../../Components/Navigation'
import HeaderTitle from '../../../Components/HeaderTitle'
const ContactHeader = () => {
    return (
        <header className="header header__secondary">
            <Navigation /> 
            <HeaderTitle title="Submit a help request and we’ll get in touch shortly." 
            secondary={true}/>            
        </header>
    )
}
export default ContactHeader

