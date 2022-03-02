import '../assets/styles/components/Contact.scss';

const ContactForm = () => {
  return (
    <>
      <form className="contactForm">
        <div className="contactForm--pair">
          <label htmlFor="InputName">
            <input
              className="form--item"
              name="name"
              id="InputName"
              type="text"
              placeholder="Name"
            />
          </label>
          <label htmlFor="inputEmail">
            <input
              className="form--item"
              name="email"
              id="inputEmail"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>
        <label htmlFor="inputMessage">
          <textarea
            className="form--item"
            id="inputMessage"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          />
        </label>
        <input
          className="btn--submit btn__hover"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default ContactForm;
