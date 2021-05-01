import Button from './Button'
const CallToActionShared = (props) => {
    return (
        <div className="cta__summary cta__summary__shared">
            <h2 className="header__title">Ready to start</h2>
            <form className="form">
                <label className="sr-only" htmlFor="email">Email (Required):</label>
                <input type="email"
                    className="email" name="email"
                    id="email-address" required aria-required="true"
                    placeholder="Enter email address" />
                <Button primary={true} />                
            </form>
        </div>
    )
}
export default CallToActionShared
