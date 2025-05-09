import React from 'react';
import './DiscordServers.css';
import discordData from '../data/discordData.json';
import { FaDiscord, FaUsers, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

const DiscordServers: React.FC = () => {
  return (
    <div className="discord-container">
      <div className="discord-header">
        <h1>Discord Servers</h1>
        <p className="discord-subtitle">
          Communities that helped me connect with fellow competitive programmers and learn from experts.
        </p>
      </div>

      <div className="discord-grid">
        {discordData.servers.map((server, index) => (
          <div key={index} className="discord-card">
            <div className="discord-card-header">
              <FaDiscord className="discord-icon" />
              <h3 className="discord-server-name">{server.name}</h3>
            </div>
            
            <div className="discord-members">
              <FaUsers className="members-icon" />
              <span>{server.members} members</span>
            </div>
            
            <p className="discord-description">{server.description}</p>
            
            <div className="discord-benefits">
              <h4>Key Benefits:</h4>
              <ul className="benefits-list">
                {server.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item">
                    <FaCheck className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={server.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="discord-link"
            >
              Join Server <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscordServers;
