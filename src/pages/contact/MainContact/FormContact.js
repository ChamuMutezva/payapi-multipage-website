import Button from '../../../Components/Button'
const FormContact = () => {
  return (
    <form className="form form__contact">

      {/*name */}
      <div className="details">
        <input
          className="form__inputs"
          type="name"
          name="firstname"
          aria-required="true"
          id="firstname"
        />
        <label className="input__label name__label" htmlFor="firstname">
          Name
                 </label>

      </div>

      {/*email address */}
      <div className="details">
        <input
          className="form__inputs"
          type="email"
          name="email"
          aria-required="true"
          id="email"

        />
        <label className="input__label" htmlFor="email">
          Email
                </label>

      </div>

      {/*company name */}
      <div className="details">
        <input
          className="form__inputs"
          type="text"
          name="companyname"
          aria-required="true"
          id="companyname"

        />
        <label className="input__label name__label" htmlFor="companyname">
          Company Name
                 </label>

      </div>

      {/*title*/}
      <div className="details">
        <input
          className="form__inputs"
          type="text"
          name="titled"
          aria-required="true"
          id="titled"

        />
        <label className="input__label name__label" htmlFor="titled">
          Title
         </label>

      </div>

      {/*message*/}
      <div className="details">
        <textarea name="msg"
         className="form__inputs"
         id="message"
        cols="30" rows="3"></textarea>
       
        <label className="input__label name__label" htmlFor="msg">
          Message
        </label>

      </div>
      <div className="details details__check">
        <input  className="form__check" type='checkbox' id='update' name='update' />
        <label htmlFor='update' className="check__label">
          Stay up-to-date with company announcements and updates to our API
          </label>
      </div>
      <Button title="Submit" formBtn={true}/>
    </form>
  )
}
export default FormContact