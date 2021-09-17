import React, { useEffect } from 'react';
import Checkout from '../components/CheckOut'
const ContactPage = () => {
  function sendEmail(e) {
    e.preventDefault();
    e.target.reset();
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="contact__page">
      <div className="content">
        <h5>LET'S TALK</h5>
        <h2>Hello! We've been waiting for you.</h2>
        <p>Fill in the form or <span>Send us an email</span></p>
      </div>
      <form name="contact" onSubmit={sendEmail}>
        <div className="inputs">
          <input
            required
            type="text"
            name="name" />
          <label
            htmlFor=""
          >What's your Name?</label>
        </div>
        <div className="inputs">
          <input
            required
            type="email"
            name="email" />
          <label
            htmlFor="">Your Email </label>
        </div>
        <div className="inputs">
          <input
            required
            type="text-area"
            name="message" />
          <label
            htmlFor=""
          >Tell use about your project...</label>
        </div>
        <div>
          <button onClick={() => {

          }}
            type="submit" value="submit"
          >Send Email</button>
        </div>
      </form>
      <div className="contact__container">
        <Checkout />
      </div>
    </section>
  );
};

export default ContactPage;
