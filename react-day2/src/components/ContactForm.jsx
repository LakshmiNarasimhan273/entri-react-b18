import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="p-4 shadow rounded bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Type your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
