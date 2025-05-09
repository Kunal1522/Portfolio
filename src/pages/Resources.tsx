import React from 'react';
import './Resources.css';
import resourcesData from '../data/resourcesData.json';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';

const Resources: React.FC = () => {
  return (
    <div className="resources-container">
      <div className="resources-header">
        <h1>Resources I Used</h1>
        <p className="resources-subtitle">
          These are the key learning resources that helped me improve my competitive programming skills.
        </p>
      </div>

      <div className="resources-grid">
        {resourcesData.resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-icon">
              <FaBook />
            </div>
            <h3 className="resource-title">{resource.name}</h3>
            <p className="resource-description">{resource.description}</p>
            <div className="resource-why">
              <h4>Why it helped me:</h4>
              <p>{resource.whyUseful}</p>
            </div>
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              Visit Resource <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
