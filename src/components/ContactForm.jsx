import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendValue } from '../actions/formAction';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [form, setValuesForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const onChange = (e) => {
    setValuesForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
    };
    dispatch(sendValue(data));
    console.log(form);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="InputName">
          <input
            name="name"
            id="InputName"
            type="text"
            placeholder="name"
            onChange={onChange}
          />
        </label>
        <label htmlFor="inputEmail">
          <input
            name="email"
            id="inputEmail"
            type="email"
            placeholder="Email"
            onChange={onChange}
          />
        </label>
        <label htmlFor="inputPhoneNumber">
          <input
            name="phoneNumber"
            id="inputPhoneNumber"
            type="number"
            placeholder="Phone Number"
            onChange={onChange}
          />
        </label>
        <label htmlFor="inputMessage">
          <textarea
            id="inputMessage"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactForm;
