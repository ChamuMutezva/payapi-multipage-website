import { useState } from 'react'
import Button from '../../../Components/Button'

const FormContact = () => {

  const initialState = {
    fullName: "",
    email: "",
    company: "",
    title: "",
    message: "",
    terms: "",
    touched: {
      fullName: false,
      company: false,
      title: false,
      email: false,
    }

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
    console.log(evt.target)
    console.log(formData)
    alert("Form submitted successfully")
  }

 
  const validate = () => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Object to collect error feedback and to display on the form
    const errors = {
      fullName: '',
      title: '',
      company: '',
      email: '',
    }

    //validate fullname
    if (
      (formData.touched.fullName && formData.fullName.length < 3) ||
      (formData.touched.fullName && formData.fullName.length > 30)
    ) {
      errors.fullName = 'First name must be between 2 and 30'
    }

    //validate email
    
    if (
      (formData.touched.email && !formData.email.match(validEmail)) 
    ) {
      errors.email = 'email is not valid'
    }

    //validate company
    if (
      (formData.touched.company && formData.company.length < 3) ||
      (formData.touched.company && formData.company.length > 50)
    ) {
      errors.company = 'Company name must not be empty'
    }

    //validate title
    if (
      (formData.touched.title && formData.title.length < 2) ||
      (formData.touched.title && formData.title.length > 8)
    ) {
      errors.title = 'Title  must be between 2 and 12'
    }
    return errors
  }

  const errors = validate()

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
        <br />
        {errors.fullName && <small className="error__alert">{errors.fullName}</small>}

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
          onBlur={onBlur}
          onChange={onChange}

        />
        <label className="input__label" htmlFor="email">
          Email
         </label>

         <br />
        {errors.email && <small className="error__alert">{errors.email}</small>}

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
          onBlur={onBlur}
          onChange={onChange}

        />
        <label className="input__label name__label" htmlFor="companyname">
          Company Name
         </label>
        <br />
        {errors.company && <small className="error__alert">{errors.company}</small>}

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
          onBlur={onBlur}
          onChange={onChange}

        />
        <label className="input__label name__label" htmlFor="titled">
          Title
         </label>

        <br />
        {errors.title && <small className="error__alert">{errors.title}</small>}

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