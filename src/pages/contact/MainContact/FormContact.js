const FormContact = () => {
    return (
        <form action="">

            {/*name */}
            <div className="details">
                <input
                    className="form__inputs"
                    type="name"
                    name="firstname"
                    aria-required="true"
                    id="firstname"
                  /*  ref={register({ required: true })} */
                />
                <label className="input__label name__label" htmlFor="firstname">
                    Name
                 </label>
             {/*   {errors.firstname && (
                    <span className="errorMsg"> Name is required</span>
                )}
             */}
            </div>

            {/*email address */}
            <div className="details">
                <input
                    className="form__inputs"
                    type="email"
                    name="email"
                    aria-required="true"
                    id="email"
                  /*  ref={register({ required: true, validate: validateEmail })} */
                />
                <label className="input__label" htmlFor="email">
                    Email
                </label>
              {/*  {errors.email && (
                    <span className="errorMsg">Email is required</span>
                )}
              */}
            </div>

            {/*company name */}
            <div className="details">
                <input
                    className="form__inputs"
                    type="text"
                    name="companyname"
                    aria-required="true"
                    id="companyname"
                  /*  ref={register({ required: true })} */
                />
                <label className="input__label name__label" htmlFor="companyname">
                   Company Name
                 </label>
             {/*   {errors.firstname && (
                    <span className="errorMsg"> Name is required</span>
                )}
             */}
            </div>

            {/*title*/}
            <div className="details">
                <input
                    className="form__inputs"
                    type="text"
                    name="titled"
                    aria-required="true"
                    id="titled"
                  /*  ref={register({ required: true })} */
                />
                <label className="input__label name__label" htmlFor="titled">
                   Title
                 </label>
             {/*   {errors.firstname && (
                    <span className="errorMsg"> Name is required</span>
                )}
             */}
            </div>

             {/*title*/}
             <div className="details">
                <input
                    className="form__inputs"
                    type="textarea"
                    name="msg"
                    aria-required="true"
                    id="titled"
                  /*  ref={register({ required: true })} */
                />
                <label className="input__label name__label" htmlFor="msg">
                   Message
                 </label>
             {/*   {errors.firstname && (
                    <span className="errorMsg"> Name is required</span>
                )}
             */}
            </div>
            <div className="details">
            <input type='checkbox' id='update' name='update'  />
            <label htmlFor='update'>Stay up-to-date with company announcements and updates to our API</label>
          </div>

        </form>
    )
}
export default FormContact