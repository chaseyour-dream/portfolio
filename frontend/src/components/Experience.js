import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/experience/')
      .then(response => response.json())
      .then(data => setExperiences(data))
      .catch(error => {
        console.error('Error fetching experiences:', error);
        // Fallback data with certificates
        setExperiences([
          {
            id: 1,
            title: 'Leo Club President',
            company: 'Leo Club of Pokhara Silver Mountains',
            location: 'Pokhara, Nepal',
            start_date: '2025',
            end_date: '2026',
            is_current: true,
            description: 'Currently serving as President with strong background in leadership, strategic planning, event coordination, and team leadership. Fostering student engagement and promoting a positive collaborative environment.',
            certificate: '/api/placeholder/400/300',
            certificate_url: null
          },
          {
            id: 2,
            title: 'Python Django Developer',
            company: 'KK Engineering Pvt. Ltd.',
            location: 'Freelance',
            start_date: '2025',
            end_date: 'Present',
            is_current: true,
            description: 'Developed and deployed the official company website kk-engineering.org using Django. Built backend features, admin panel structures, and dynamic service pages. Integrated SEO-friendly structure and performed server deployment & maintenance.',
            certificate: '/api/placeholder/400/300',
            certificate_url: null
          },
          {
            id: 3,
            title: 'Laravel Developer',
            company: 'DEAN (Diploma Engineering Association of Nepal)',
            location: 'Freelance',
            start_date: '2025',
            end_date: 'Present',
            is_current: true,
            description: 'Developing a dynamic organizational website using Laravel. Building backend modules, content management features, and database structures. Improving UI/UX and ensuring responsive design across all devices.',
            certificate: '/api/placeholder/400/300',
            certificate_url: null
          },
          {
            id: 4,
            title: 'Python Django Developer',
            company: 'Spiral Engineering Consultancy',
            location: 'Freelance',
            start_date: '2025',
            end_date: 'Present',
            is_current: true,
            description: 'Creating a multi-page consultancy website with Django backend functionality. Implementing custom models, service modules, and admin-side management tools. Designing responsive layout and optimizing website performance.',
            certificate: '/api/placeholder/400/300',
            certificate_url: null
          },
          {
            id: 5,
            title: 'Campus Director',
            company: 'Hult Prize Janapriya Multiple Campus',
            location: 'Pokhara, Nepal',
            start_date: '2024',
            end_date: '2025',
            is_current: false,
            description: 'Served as Campus Director with strong background in Information Management and leadership. Experienced in strategic planning, event coordination, and team leadership. Fostered student engagement and promoted positive collaborative environment.',
            certificate: '/api/placeholder/400/300',
            certificate_url: null
          },
          {
            id: 6,
            title: 'College Representative',
            company: 'Code For Change',
            location: 'Janapriya Multiple Campus',
            start_date: '2024',
            end_date: '2025',
            is_current: false,
            description: 'Coordinated with faculty and Code for Change organizers to successfully host workshops, orientation sessions, and recruitment drives on campus. Represented Janapriya Multiple Campus in inter-campus meetings.',
            certificate: '/api/placeholder/400/300',
            certificate_url: null
          }
        ]);
      });
  }, []);

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card"
            >
              {exp.certificate && (
                <div className="certificate-section">
                  <div className="certificate-image">
                    <img
                      src={exp.certificate}
                      alt={`${exp.title} Certificate`}
                      onError={(e) => {
                        e.target.src = '/api/placeholder/400/300';
                      }}
                    />
                  </div>
                </div>
              )}
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <button className="company-name company-button">
                      <FaBriefcase className="icon" />
                      {exp.company}
                    </button>
                    {exp.location && (
                      <div className="location">
                        <FaMapMarkerAlt className="icon" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                  <div className="date-range">
                    <FaCalendarAlt className="icon" />
                    {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
                  </div>
                </div>
                
                <div className="job-description">
                  <p>{exp.description}</p>
                </div>
                
                {(exp.certificate_url || exp.certificate) && (
                  <div className="certificate-actions">
                    {exp.certificate_url && (
                      <a
                        href={exp.certificate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                      >
                        <FaExternalLinkAlt /> View Certificate
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;