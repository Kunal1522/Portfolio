import React from 'react';
import './Philosophy.css';
import philosophyData from '../data/philosophyData.json';
import { FaLightbulb } from 'react-icons/fa';

const Philosophy: React.FC = () => {
  return (
    <div className="philosophy-container">
      <div className="philosophy-header">
        <h1>My Philosophy on Problem Solving</h1>
        <p className="philosophy-subtitle">
          Principles and practices I follow when approaching competitive programming challenges.
        </p>
      </div>

      <div className="philosophy-cards">
        {philosophyData.philosophy.map((principle, index) => (
          <div 
            key={index} 
            className="philosophy-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="principle-number">{index + 1}</div>
            <div className="principle-content">
              <div className="principle-icon">
                <FaLightbulb />
              </div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
