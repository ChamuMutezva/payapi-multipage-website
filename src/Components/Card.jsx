const Card = (props) => {
    return (
        <div className={`primary__cards`}>
            <div className={`card__holder`}>
                <img
                    className={`card__img js__primaryImg`}
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div className="card__description">
                {props.title && (
                    <h2 className={"card__title"}>{props.title}</h2>
                )}
                {props.subtitle && (
                    <h3 className={"card__subtitle"}>{props.subtitle}</h3>
                )}
                <p className="card__summary card__summary__primary">
                    {props.summary}
                </p>
            </div>
        </div>
    );
};
export default Card;
