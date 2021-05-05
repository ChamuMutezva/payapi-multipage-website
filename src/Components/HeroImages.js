import tesla from "../assets/shared/desktop/tesla.svg"
import microsoft from "../assets/shared/desktop/microsoft.svg"
import hewlett from "../assets/shared/desktop/hewlett-packard.svg"
import oracle from "../assets/shared/desktop/oracle.svg"
import google from "../assets/shared/desktop/google.svg"
import nvidia from "../assets/shared/desktop/nvidia.svg"
const HeroImages = (props) => {
    const heroImageHome = props.heroHome ? "hero__img__home" : ""
    return(
        <div className="hero__images">
                    <img className={`hero__tesla hero__img ${heroImageHome}`} src={tesla} alt="tesla corporation private limited" />
                    <img className={`hero__microsoft hero__img ${heroImageHome}`} src={microsoft} alt="microsoft corporation private limited" />
                    <img className={`hero__hewlett hero__img ${heroImageHome}`} src={hewlett} alt="hewlett parkard corporation private limited" />
                    <img className={`hero__oracle hero__img ${heroImageHome}`} src={oracle} alt="oracle corporation private limited" />
                    <img className={`hero__google hero__img ${heroImageHome}`} src={google} alt="google corporation private limited" />
                    <img className={`hero__nvidia hero__img ${heroImageHome}`} src={nvidia} alt="nvidia corporation private limited" />
                </div>
    )
}
export default HeroImages