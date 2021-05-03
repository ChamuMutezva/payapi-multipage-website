import mobileTeam from '../../../assets/about/mobile/image-team-members.jpg'
import tabletTeam from '../../../assets/about/tablet/image-team-members.jpg'
import deskTeam from '../../../assets/about/desktop/image-team-members.jpg'
const HeroAbout = () => {
    return(
        <picture className="about__img">            
            <source media="(max-width:719px)" srcset={mobileTeam}/>
            <source media="(max-width:1279px)" srcset={tabletTeam}/>
            <source media="(min-width: 1280px)" srcset={deskTeam} />
            <img className="hero__about__img" src={mobileTeam} alt="team members at work"/>
        </picture>
    )
}
export default HeroAbout