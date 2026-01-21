import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Typed from 'typed.js';
import { initResponsiveUtils } from '../utils/responsive';
import './Hero.css';
import '../styles/mobile-fixes.css';

const Hero = () => {
  const [profileData, setProfileData] = useState(null);
  const typedRef = useRef(null);

  useEffect(() => {
    // Fetch profile data from Django API
    fetch('http://localhost:8000/api/profile/')
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error('Error fetching profile:', error));
    
    // Initialize responsive utilities
    const cleanup = initResponsiveUtils();
    
    return cleanup;
  }, []);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        'Python Django Developer',
        'Laravel Developer',
        'Leo Club President',
        'Campus Director',
        'Full Stack Developer',
        'Tech Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm<br />
              <span className="name-red">
                Pariwartan Sharma
              </span>
            </motion.h1>
            
            <motion.div className="hero-subtitle" variants={itemVariants}>
              <span ref={typedRef} className="typed-text"></span>
            </motion.div>
            
            <motion.p className="hero-description" variants={itemVariants}>
              {profileData?.bio || 
                'Passionate developer and leader with expertise in Python Django, Laravel, and full-stack development. Currently serving as Leo Club President and Campus Director, fostering innovation and community engagement.'
              }
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href={profileData?.resume || '#'}
                className="btn btn-red-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FaDownload /> Download CV
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-red-filled"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <FaEnvelope /> Contact Me
              </motion.a>
            </motion.div>
            
            <motion.div className="hero-social" variants={itemVariants}>
              <motion.a
                href={profileData?.github_url || 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              
              <motion.a
                href={profileData?.linkedin_url || 'https://www.linkedin.com/in/pariwartan-paudel/'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a
                href={profileData?.instagram_url || 'https://www.instagram.com/the_pariwartan/'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              
              <motion.a
                href={profileData?.facebook_url || 'https://www.facebook.com/pariwartan.paudel.9'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div className="hero-image" variants={imageVariants}>
            <motion.div
              className="image-container"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img
                src={profileData?.profile_image || '/api/placeholder/400/400'}
                alt="Profile"
                className="profile-image"
              />
              <div className="image-glow"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;