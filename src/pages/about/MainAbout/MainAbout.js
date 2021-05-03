import Mission from '../../../Components/Mission'
import HeroAbout from './HeroAbout'
import PrimaryAbout from './PrimaryAbout'
import CallToActionShared from '../../../Components/CallToActionShared'
const MainAbout = () => {
    return (
        <main className="main main__about">
            <div className="missions">
                <Mission title="Our Vision"
                    summary="Our main goal is to build beautiful consumer experiences along with developer-friendly 
                             infrastructure. The result is an intelligent tool that gives everyone the ability to create 
                             amazing products that solve big problems. We are deeply focused on democratizing financial 
                             services through technology."/>

                <Mission title="Our Business"
                    summary="At the core of our platform is the technical infrastructure APIs that connect consumers. 
                            Our innovative product provides key insights for businesses and individuals, as well as 
                             robust reporting for traditional financial institutions and developers."/>
            </div>
            <HeroAbout />
            <PrimaryAbout />
            <div className="missions">
                <Mission title="The Culture"
                    summary=" We strongly believe there's always an opportunity to learn from each other outside of
                day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups.
                We always value cross-team collaboration and diversity of thought, no matter the job title."/>
                <Mission title="The People"
                    summary=" We're all passionate about building a more efficient and inclusive financial infrastructure
                together. At PayAPI, we have diverse backgrounds and skills."/>
            </div>

            <CallToActionShared />
        </main>
    )
}
export default MainAbout