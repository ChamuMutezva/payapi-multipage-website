import CardImg from "../../../assets/home/desktop/illustration-easy-to-implement.svg"
const Secondary = () => {
    return (
        <section>
            <div className="card">
                <img src={CardImg} alt="" />
                <h2 className="card__title">Easy to implement</h2>

                <p className="card__summary">
                    Our API comes with just a few lines of code. You’ll be up and running in
                    no time. We built our documentation page to integrate payments functionality
                    with ease.
                 </p>
            </div>
        </section>
    )
}
export default Secondary