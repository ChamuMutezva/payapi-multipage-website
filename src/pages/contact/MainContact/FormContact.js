import { useState } from 'react'
import Button from '../../../Components/Button'

const FormContact = () => {

  const initialState = {
    fullName: "",
    email: "",
    company: "",
    title: "",
    message: "",
    terms: ""

  }

  const [formData, setData] = useState(initialState)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === "checked") {
      setData({ ...formData, [name]: checked })
    } else {
      setData({ ...formData, [name]: value })
    }
  }

  const onBlur = (e) => {
    const { name } = e.target
    setData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(formData)
  }

  const { fullName, email, company, title, message, terms } = formData
  return (
    <form className="form form__contact" onSubmit={handleSubmit}>

      {/*name */}
      <div className="details">
        <input
          className="form__inputs"
          type="text"
          name="fullName"
          aria-required="true"
          required
          id="fullname"
          value={fullName}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label className="input__label name__label" htmlFor="fullname">
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
          required
          id="email"
          value={email}
          onChange={onChange}

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
          name="company"
          aria-required="true"
          required
          id="companyname"
          value={company}
          onChange={onChange}

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
          name="title"
          aria-required="true"
          required
          id="titled"
          value={title}
          onChange={onChange}

        />
        <label className="input__label name__label" htmlFor="titled">
          Title
         </label>

      </div>

      {/*message*/}
      <div className="details">
        <textarea name="message"
          className="form__inputs"
          id="message"
          value={message}
          onChange={onChange}
          cols="30"
          rows="3"></textarea>

        <label className="input__label name__label" htmlFor="msg">
          Message
        </label>

      </div>
      <div className="details details__check">
        <input className="form__check"
          value={terms}
          onChange={onChange}
          type='checkbox'
          id='terms'
          name='terms' />
        <label htmlFor='terms' className="check__label">
          Stay up-to-date with company announcements and updates to our API
          </label>
      </div>
      <Button title="Submit" formBtn={true} />
    </form>
  )
}
export default FormContact