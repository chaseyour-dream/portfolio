import React, { useEffect, useState } from 'react';
import './SparkEffect.css';

const SparkEffect = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate smaller, more subtle galaxy stars
    const generateGalaxyStars = () => {
      const starArray = [];
      
      // Small distant stars (tiny twinkling points)
      for (let i = 0; i < 200; i++) {
        starArray.push({
          id: `distant-${i}`,
          type: 'distant',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.8 + 0.3, // Much smaller: 0.3-1.1px
          delay: Math.random() * 10,
          duration: Math.random() * 4 + 3,
          brightness: Math.random() * 0.6 + 0.2,
        });
      }
      
      // Small medium stars
      for (let i = 0; i < 80; i++) {
        starArray.push({
          id: `medium-${i}`,
          type: 'medium',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.2 + 0.6, // Smaller: 0.6-1.8px
          delay: Math.random() * 8,
          duration: Math.random() * 5 + 4,
          brightness: Math.random() * 0.5 + 0.3,
        });
      }
      
      // Small bright stars
      for (let i = 0; i < 30; i++) {
        starArray.push({
          id: `bright-${i}`,
          type: 'bright',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.8, // Smaller: 0.8-2.3px
          delay: Math.random() * 6,
          duration: Math.random() * 6 + 5,
          brightness: Math.random() * 0.4 + 0.5,
        });
      }
      
      // Subtle nebula particles
      for (let i = 0; i < 15; i++) {
        starArray.push({
          id: `nebula-${i}`,
          type: 'nebula',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2, // Smaller nebula: 2-6px
          delay: Math.random() * 15,
          duration: Math.random() * 12 + 8,
          brightness: Math.random() * 0.2 + 0.05,
        });
      }
      
      // More frequent falling stars - INCREASED!
      for (let i = 0; i < 25; i++) {
        starArray.push({
          id: `falling-${i}`,
          type: 'falling',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.2 + 0.4, // Small falling stars: 0.4-1.6px
          delay: Math.random() * 8 + i * 0.5, // More frequent timing
          duration: Math.random() * 2.5 + 1.2, // Varied speed: 1.2-3.7s
          brightness: Math.random() * 0.4 + 0.6,
          angle: Math.random() * 80 + 10, // More varied angles: 10-90 degrees
        });
      }
      
      // Add extra fast falling stars for more activity
      for (let i = 0; i < 15; i++) {
        starArray.push({
          id: `fast-falling-${i}`,
          type: 'falling',
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.8 + 0.3, // Smaller fast stars: 0.3-1.1px
          delay: Math.random() * 12 + i * 0.8, // Different timing pattern
          duration: Math.random() * 1.5 + 0.8, // Very fast: 0.8-2.3s
          brightness: Math.random() * 0.5 + 0.5,
          angle: Math.random() * 70 + 20, // Angles: 20-90 degrees
        });
      }
      
      setStars(starArray);
    };

    generateGalaxyStars();
  }, []);

  return (
    <div className="galaxy-container">
      <div className="galaxy-background"></div>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star-${star.type}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.brightness,
            ...(star.type === 'falling' && {
              '--fall-angle': `${star.angle}deg`
            })
          }}
        />
      ))}
    </div>
  );
};

export default SparkEffect;