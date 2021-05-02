const Mission = (props) => {
    return (
        <div className="mission">
            <h2 className="mission__title">{props.title}</h2>
            <p className="paragraph mission__summary">{props.summary}</p>
        </div>
    )
}
export default Mission