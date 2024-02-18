import Navigation from '../../../Components/navigation/Navigation'
import HeaderTitle from '../../../Components/HeaderTitle'
const AboutHeader = () => {
    return (
        <header className="header header__secondary">
            <Navigation />   
            <HeaderTitle title="We empower innovators by delivering access to the financial system" 
            secondary={true} aboutTitle={true}/>      
        </header>
    )
}
export default AboutHeader
