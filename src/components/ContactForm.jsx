const ContactForm = () => {
  return (
    <>
      <form>
        <label htmlFor="InputName">
          <input name="name" id="InputName" type="text" placeholder="name" />
        </label>
        <label htmlFor="inputEmail">
          <input
            name="email"
            id="inputEmail"
            type="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="inputMessage">
          <textarea
            id="inputMessage"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactForm;
