import { useEffect, useState } from 'react';
import { 
  FaPython, FaLaravel, FaReact, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDatabase, FaUsers, FaBullhorn, FaLightbulb,
  FaHandshake, FaChartLine, FaCode
} from 'react-icons/fa';
import { SiDjango, SiMysql, SiPostgresql, SiBootstrap } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/skills/')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => {
        console.error('Error fetching skills:', error);
        // Fallback data
        setSkills([
          // Technical Skills
          { id: 1, name: 'Python', category: 'technical', proficiency: 90, icon: 'FaPython' },
          { id: 2, name: 'Django', category: 'technical', proficiency: 85, icon: 'SiDjango' },
          { id: 3, name: 'Laravel', category: 'technical', proficiency: 80, icon: 'FaLaravel' },
          { id: 4, name: 'React', category: 'technical', proficiency: 75, icon: 'FaReact' },
          { id: 5, name: 'JavaScript', category: 'technical', proficiency: 80, icon: 'FaJs' },
          { id: 6, name: 'HTML5', category: 'technical', proficiency: 95, icon: 'FaHtml5' },
          { id: 7, name: 'CSS3', category: 'technical', proficiency: 90, icon: 'FaCss3Alt' },
          { id: 8, name: 'MySQL', category: 'technical', proficiency: 85, icon: 'SiMysql' },
          { id: 9, name: 'PostgreSQL', category: 'technical', proficiency: 75, icon: 'SiPostgresql' },
          { id: 10, name: 'Git', category: 'tools', proficiency: 85, icon: 'FaGitAlt' },
          { id: 11, name: 'Bootstrap', category: 'tools', proficiency: 90, icon: 'SiBootstrap' },
          
          // Leadership Skills
          { id: 12, name: 'Team Leadership', category: 'leadership', proficiency: 90, icon: 'FaUsers' },
          { id: 13, name: 'Strategic Planning', category: 'leadership', proficiency: 85, icon: 'FaChartLine' },
          { id: 14, name: 'Event Coordination', category: 'leadership', proficiency: 88, icon: 'FaBullhorn' },
          { id: 15, name: 'Project Management', category: 'leadership', proficiency: 82, icon: 'FaLightbulb' },
          
          // Soft Skills
          { id: 16, name: 'Communication', category: 'soft', proficiency: 90, icon: 'FaHandshake' },
          { id: 17, name: 'Problem Solving', category: 'soft', proficiency: 88, icon: 'FaCode' },
        ]);
      });
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      FaPython, FaLaravel, FaReact, FaJs, FaHtml5, FaCss3Alt,
      FaGitAlt, FaDatabase, FaUsers, FaBullhorn, FaLightbulb,
      FaHandshake, FaChartLine, FaCode, SiDjango, SiMysql, 
      SiPostgresql, SiBootstrap
    };
    const IconComponent = icons[iconName] || FaCode;
    return <IconComponent />;
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryTitles = {
    technical: 'Technical Skills',
    leadership: 'Leadership Skills',
    tools: 'Tools & Technologies',
    soft: 'Soft Skills'
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          Skills & Expertise
        </h2>
        
        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="skill-category"
            >
              <h3 className="category-title">
                {categoryTitles[category] || category}
              </h3>
              
              <div className="skills-list">
                {categorySkills.map((skill, index) => (
                  <div
                    key={skill.id}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <div className="skill-icon">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;