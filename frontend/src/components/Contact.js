import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'pariwartan.poudel@example.com',
      link: 'mailto:pariwartan.poudel@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+977 9804143045',
      link: 'tel:+97798XXXXXXXX'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Pokhara, Nepal',
      link: null
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">
          Get In Touch
        </h2>
        
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a friendly chat about technology and leadership.
        </p>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-description">
              Whether you're looking for a developer, need consultation on a project, 
              or want to collaborate on something exciting, I'd love to hear from you!
            </p>
            
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-info-item"
                >
                  <div className="info-icon">
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="info-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-input form-textarea"
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;