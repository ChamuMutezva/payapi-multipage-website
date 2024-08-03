import FormContact from "./FormContact";
import SharedForm from "../../../Components/FormShared";

const MainContact = () => {
    const tesla = "assets/shared/desktop/tesla.svg";
    const microsoft = "assets/shared/desktop/microsoft.svg";
    const hewlett = "assets/shared/desktop/hewlett-packard.svg";
    const oracle = "assets/shared/desktop/oracle.svg";
    const google = "assets/shared/desktop/google.svg";
    const nvidia = "assets/shared/desktop/nvidia.svg";
    return (
        <main className="main__contact">
            <h1 className={`hero__title`}>
                Submit a help request and we’ll get in touch shortly.
            </h1>

            <div className="contact__primary">
                <FormContact />

                <div className="hero__contact">
                    <h2 className="contact__title">
                        Join the thousands of innovators already building with
                        us
                    </h2>

                    <div className="primary__images contact__images">
                        <img
                            className={`primary__tesla primary__img primary__img__contact`}
                            src={tesla}
                            alt="tesla corporation private limited"
                        />
                        <img
                            className={`primary__microsoft primary__img primary__img__contact`}
                            src={microsoft}
                            alt="microsoft corporation private limited"
                        />
                        <img
                            className={`primary__hewlett primary__img primary__img__contact`}
                            src={hewlett}
                            alt="hewlett parkard corporation private limited"
                        />
                        <img
                            className={`primary__oracle primary__img primary__img__contact`}
                            src={oracle}
                            alt="oracle corporation private limited"
                        />
                        <img
                            className={`primary__google primary__img primary__img__contact`}
                            src={google}
                            alt="google corporation private limited"
                        />
                        <img
                            className={`primary__nvidia primary__img primary__img_contact`}
                            src={nvidia}
                            alt="nvidia corporation private limited"
                        />
                    </div>
                </div>
            </div>
            <div className={`hero__summary hero__summary__secondary`}>
                <h2 className={`header__title`}>Ready to start</h2>
                <SharedForm desktopCentered={true} />
            </div>
        </main>
    );
};
export default MainContact;
