import tesla from "../assets/shared/desktop/tesla.svg";
import microsoft from "../assets/shared/desktop/microsoft.svg";
import hewlett from "../assets/shared/desktop/hewlett-packard.svg";
import oracle from "../assets/shared/desktop/oracle.svg";
import google from "../assets/shared/desktop/google.svg";
import nvidia from "../assets/shared/desktop/nvidia.svg";
const HeroImages = (props) => {
    const primaryImageHome = props.primaryHome ? "primary__img__home" : "";

    return (
        <div className="primary__image__container">
            <div className="primary__images">
                <img
                    className={`primary__tesla primary__img ${primaryImageHome}`}
                    src={tesla}
                    alt="tesla corporation private limited"
                />
                <img
                    className={`primary__microsoft primary__img ${primaryImageHome}`}
                    src={microsoft}
                    alt="microsoft corporation private limited"
                />
                <img
                    className={`primary__hewlett primary__img ${primaryImageHome}`}
                    src={hewlett}
                    alt="hewlett parkard corporation private limited"
                />
                <img
                    className={`primary__oracle primary__img ${primaryImageHome}`}
                    src={oracle}
                    alt="oracle corporation private limited"
                />
                <img
                    className={`primary__google primary__img ${primaryImageHome}`}
                    src={google}
                    alt="google corporation private limited"
                />
                <img
                    className={`primary__nvidia primary__img ${primaryImageHome}`}
                    src={nvidia}
                    alt="nvidia corporation private limited"
                />
            </div>
        </div>
    );
};
export default HeroImages;
