const Card = (props) => {
   const primaryImg = props.primary ? "js__primaryImg" : ""
    return (
        <div className="card">
        <div className={`card__holder`}><img className={`card__img ${primaryImg}`} src={props.src} alt={props.alt} /></div>
            <div className="card__description">
                <h2 className="card__title">{props.title}</h2>
                <h3 className="card__subtitle">{props.subtitle}</h3>
                <p className="card__summary">{props.summary}</p>
            </div>
        </div>
    )
}
export default Card