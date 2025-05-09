import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

// Import all project images
import bitotsavImage from '../images/Bitotsav.jpg';
import bitWasteImage from '../images/BitWaste.jpg';
import moleculeXImage from '../images/MoleculeX.jpg';
import bitSharkImage from '../images/BitShark.jpg';
import chatServerImage from '../images/ChatServer.jpg';
import logoImage from '../images/logo.png';

// Create a map of image paths to their imports
const imageMap: Record<string, string> = {
  'Bitotsav.jpg': bitotsavImage,
  'BitWaste.jpg': bitWasteImage,
  'MoleculeX.jpg': moleculeXImage,
  'BitShark.jpg': bitSharkImage,
  'ChatServer.jpg': chatServerImage,
  'logo.png': logoImage
};

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => { 
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    
    fetchProjects()
  }, [])
  
  if (projects.length === 0) return <div>Loading...</div>;

  const handleWatchNow = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMoreInfo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to get the correct image source
  const getImageSource = (imageUrl: string) => {
    // Extract the filename from the path (handles both ./images/file.jpg and ../images/file.jpg formats)
    const filename = imageUrl.split('/').pop();
    
    if (filename && imageMap[filename]) {
      return imageMap[filename];
    }
    
    // Fallback to logo if the image isn't found in our map
    return logoImage;
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img 
              src={getImageSource(project.image.url)} 
              alt={project.title} 
              className="project-image" 
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-buttons">
                {project.deployedLink && (
                  <PlayButton 
                    onClick={() => handleWatchNow(project.deployedLink as string)} 
                    label="Watch Now" 
                  />
                )}
                {project.githubLink && (
                  <MoreInfoButton 
                    onClick={() => handleMoreInfo(project.githubLink as string)} 
                    label="More Info" 
                  />
                )}
              </div>

              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
