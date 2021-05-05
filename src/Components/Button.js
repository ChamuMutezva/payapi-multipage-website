const Button = (props) => {
    const primaryBtn = props.primary ? "js__primary" : ""
    const headerBtn = props.secondary ? "js__secondary--btn" : ""
    const formBtn = props.formBtn? "js__form--btn" : ""
    return (
        <button className={`btn schedule--btn ${primaryBtn} ${headerBtn} ${formBtn}`}>
            {props.title}
        </button>
    )
}
export default Button