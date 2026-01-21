import { FaGithub, FaLinkedin, FaHeart, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/username',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/pariwartan-paudel/',
      label: 'LinkedIn'
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/pariwartan_paudel/',
      label: 'Instagram'
    },
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/pariwartan.paudel',
      label: 'Facebook'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
          <div className="footer-shape footer-shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Pariwartan Sharma</h3>
            <p className="footer-tagline">
              Python Django Developer | Laravel Developer | Leo Club President
            </p>
            <p className="footer-description">
              Building innovative web solutions and leading communities 
              towards positive change and growth.
            </p>
          </div>
          
          <div className="footer-section footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact-info">
              <p>Pokhara, Nepal</p>
              <p><a href="mailto:pariwartanpaudel@gmail.com" style={{color: '#ffffff', textDecoration: 'none'}}>pariwartanpaudel@gmail.com</a></p>
              <p>+977 9804143045</p>
            </div>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Pariwartan Sharma. Made with{' '}
              <span className="heart-icon">
                <FaHeart />
              </span>{' '}
              using Django & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;