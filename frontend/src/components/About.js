import { useEffect, useState, useRef, useCallback } from 'react';
import './About.css';

const About = () => {
  const [profileData, setProfileData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/profile/')
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  const stats = [
    { number: '3+', label: 'Years Experience', target: 3, suffix: '+' },
    { number: '15+', label: 'Projects Completed', target: 15, suffix: '+' },
    { number: '5+', label: 'Technologies', target: 5, suffix: '+' },
    { number: '100%', label: 'Client Satisfaction', target: 100, suffix: '%' }
  ];

  const CounterAnimation = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    const animate = useCallback((startTime, currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame((time) => animate(startTime, time));
      }
    }, [target, duration]);

    useEffect(() => {
      if (isVisible && !hasStarted) {
        setHasStarted(true);
        requestAnimationFrame((time) => animate(null, time));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, hasStarted, animate]);

    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Python Django Developer</strong> and <strong>Laravel Developer</strong> 
              with a strong background in full-stack web development. Currently serving as the 
              <strong> Leo Club of Pokhara Silver Mountains Club President 2025/2026</strong> and 
              <strong> Campus Director</strong>, I bring leadership experience alongside technical expertise.
            </p>
            
            <p>
              My journey in technology has led me to work on diverse projects, from developing 
              company websites like <strong>kk-engineering.org</strong> to building dynamic 
              organizational platforms. I specialize in creating scalable backend solutions, 
              intuitive admin panels, and responsive user interfaces.
            </p>
            
            <p>
              Beyond coding, I'm deeply involved in community leadership and student engagement. 
              As a Campus Director for <strong>Hult Prize Janapriya Multiple Campus</strong> and 
              College Representative for <strong>Code For Change</strong>, I foster collaborative 
              environments and drive innovation in educational settings.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span>Pokhara, Nepal</span>
              </div>
              <div className="contact-item">
                <span>+977 9804143045</span>
              </div>
              <div className="contact-item">
                <span>pariwartanpaudel@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src={profileData?.profile_image || '/api/placeholder/400/500'}
                alt="About"
                className="about-img"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        
        <div className="stats-container" ref={statsRef}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
            >
              <h3 className="stat-number">
                <CounterAnimation 
                  target={stat.target} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;