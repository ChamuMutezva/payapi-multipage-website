const PrimaryAbout = () => {
    return (
        <div className="primary__about">
            <ul className="about__list">
                <li className="about__list__item">
                    <p className="about__list__summary">
                        <span>Team Members</span>
                        <strong className="about__list__data">300+</strong>
                    </p>
                </li>
                <li className="about__list__item">
                    <p className="about__list__summary">
                        <span>Offices in the US</span>
                        <strong className="about__list__data">3</strong>
                    </p>
                </li>
                <li className="about__list__item">
                    <p className="about__list__summary">
                        <span>Transactions analyzed</span>
                        <strong className="about__list__data">10M+</strong>
                    </p>
                </li>
            </ul>

        </div>
    )
}
export default PrimaryAbout