import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/tiwarirushabh59@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: 'New Portfolio Contact Form Submission',
            _captcha: false,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">
            Let's Create <span className="accent-text">Magic</span>
          </h2>

          <div className="success-message">
            <h3>🎉 Thanks for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Let's Create <span className="accent-text">Magic</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">
              Ready to make something unforgettable?
            </h3>

            <p className="contact-text">
              Your next stunning project is just a message away. Let's turn
              your ideas into reality.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">💌</div>
                <span>tiwarirushabh59@gmail.com</span>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <span>Based in Mumbai, India</span>
              </div>

              <div className="contact-method">
                <div className="method-icon">💼</div>
                <a
                  href="https://www.linkedin.com/in/rushabh-tiwari-6541b6286/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="contact-method">
                <div className="method-icon">⚡</div>
                <a
                  href="https://github.com/rushabhtiwari12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Beautiful Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell me about your magical project..."
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;