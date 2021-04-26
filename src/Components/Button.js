const Button = (props) => {
    const primaryBtn = props.primary ? "js__primary" : ""
    const headerBtn = props.secondary ? "js__secondary--btn" : ""
    return (
        <button className={`btn schedule--btn ${primaryBtn} ${headerBtn}`}>
            Schedule a demo
        </button>
    )
}
export default Button