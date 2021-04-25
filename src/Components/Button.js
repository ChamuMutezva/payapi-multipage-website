const Button = (props) => {
    const primaryBtn = props.primary ? "js__primary" : ""
    return (
        <button className={`btn schedule--btn ${primaryBtn}`}>
            Schedule a demo
        </button>
    )
}
export default Button