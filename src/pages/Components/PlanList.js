const PlanList = (props) => {
    return (
        <li className="plan__list__item">
            <img className="ticked" src={props.Ticked} alt={props.alt} />
            <span className="transactions">{props.transactions}</span>
        </li>
    )
}
export default PlanList
