import { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => {
        console.error('Error fetching projects:', error);
        // Fallback data
        setProjects([
          {
            id: 1,
            title: 'KK Engineering Website',
            description: 'Official company website for KK Engineering Pvt. Ltd. Built with Django backend featuring dynamic service pages, admin panel, and SEO-friendly structure. Includes server deployment and maintenance.',
            technologies: 'Python, Django, HTML5, CSS3, JavaScript, PostgreSQL',
            github_url: 'https://github.com/username/kk-engineering',
            live_url: 'https://kk-engineering.org',
            image: '/api/placeholder/400/250',
            featured: true,
            order: 1
          },
          {
            id: 2,
            title: 'DEAN Organization Website',
            description: 'Dynamic organizational website for Diploma Engineering Association of Nepal using Laravel. Features backend modules, content management system, and responsive design across all devices.',
            technologies: 'PHP, Laravel, MySQL, Bootstrap, JavaScript',
            github_url: 'https://github.com/username/dean-website',
            live_url: 'https://deannepalregistration.com',
            image: '/api/placeholder/400/250',
            featured: true,
            order: 2
          },
          {
            id: 3,
            title: 'Spiral Engineering Consultancy',
            description: 'Multi-page consultancy website with Django backend functionality. Implements custom models, service modules, and admin-side management tools with optimized performance.',
            technologies: 'Python, Django, React, PostgreSQL, CSS3',
            github_url: 'https://github.com/username/spiral-engineering',
            live_url: 'https://spiral-engineering.com',
            image: '/api/placeholder/400/250',
            featured: true,
            order: 3
          },
          {
            id: 4,
            title: 'Leo Club Management System',
            description: 'Comprehensive management system for Leo Club activities including member management, event coordination, and administrative tools. Built for efficient club operations.',
            technologies: 'Python, Django, React, MySQL, Bootstrap',
            github_url: 'https://github.com/username/leo-club-system',
            live_url: null,
            image: '/api/placeholder/400/250',
            featured: false,
            order: 4
          },
          {
            id: 5,
            title: 'Campus Event Coordinator',
            description: 'Event management platform for campus activities and workshops. Features registration system, event scheduling, and participant management with real-time updates.',
            technologies: 'Laravel, Vue.js, MySQL, Tailwind CSS',
            github_url: 'https://github.com/username/campus-events',
            live_url: 'https://campus-events.edu.np',
            image: '/api/placeholder/400/250',
            featured: false,
            order: 5
          },
          {
            id: 6,
            title: 'Portfolio Website',
            description: 'Personal portfolio website showcasing projects, skills, and experience. Built with Django REST API backend and React frontend with modern animations and responsive design.',
            technologies: 'Python, Django, React, Framer Motion, CSS3',
            github_url: 'https://github.com/username/portfolio',
            live_url: 'https://pariwartan-portfolio.com',
            image: '/api/placeholder/400/250',
            featured: false,
            order: 6
          }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = '/api/placeholder/400/250';
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {(project.technologies_list || project.technologies.split(', ')).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;