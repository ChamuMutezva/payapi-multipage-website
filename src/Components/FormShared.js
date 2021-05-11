import Button from './Button'
const SharedForm = () => {
    const handleSubmit = (evt) => {
        console.log(evt)
        evt.preventDefault()
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">Email (Required):</label>
            <input type="email"
                className="email" name="email"                
                id="email-temp" required aria-required="true"
                placeholder="Enter email address" />
            <Button primary={true} title="Schedule a demo" />
        </form>
    )
}
export default SharedForm