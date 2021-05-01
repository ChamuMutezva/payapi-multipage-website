import Navigation from '../../../Components/Navigation'
import HeaderTitle from '../../../Components/HeaderTitle'
const PricingHeader = () => {
    return (
        <header className="header header__secondary">
            <Navigation />   
            <HeaderTitle title="Pricing" secondary={true}/>        
        </header>
    )
}
export default PricingHeader
