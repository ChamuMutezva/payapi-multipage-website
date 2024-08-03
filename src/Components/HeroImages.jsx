const HeroImages = (props) => {
    const tesla = "assets/shared/desktop/tesla.svg";
    const microsoft = "assets/shared/desktop/microsoft.svg";
    const hewlett = "assets/shared/desktop/hewlett-packard.svg";
    const oracle = "assets/shared/desktop/oracle.svg";
    const google = "assets/shared/desktop/google.svg";
    const nvidia = "assets/shared/desktop/nvidia.svg";

    return (
        <div className="primary__image__container">
            <div className="primary__images">
                <img
                    className={`primary__tesla primary__img primary__img__home`}
                    src={tesla}
                    alt="tesla corporation private limited"
                />
                <img
                    className={`primary__microsoft primary__img primary__img__home`}
                    src={microsoft}
                    alt="microsoft corporation private limited"
                />
                <img
                    className={`primary__hewlett primary__img primary__img__home`}
                    src={hewlett}
                    alt="hewlett parkard corporation private limited"
                />
                <img
                    className={`primary__oracle primary__img primary__img__home`}
                    src={oracle}
                    alt="oracle corporation private limited"
                />
                <img
                    className={`primary__google primary__img primary__img__home`}
                    src={google}
                    alt="google corporation private limited"
                />
                <img
                    className={`primary__nvidia primary__img primary__img__home`}
                    src={nvidia}
                    alt="nvidia corporation private limited"
                />
            </div>
        </div>
    );
};
export default HeroImages;
