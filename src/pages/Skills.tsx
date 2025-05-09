import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

// React Icons
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGit, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiRedux, SiJest, SiCplusplus, SiC, SiMysql, SiFirebase, SiSupabase, SiPrisma, SiExpo, SiVite } from 'react-icons/si';

import { Skill } from '../types';

// Icon map
const iconMap: { [key: string]: JSX.Element } = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  FaGit: <FaGit />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiGraphql: <SiGraphql />,
  SiRedux: <SiRedux />,
  SiJest: <SiJest />,
  SiCplusplus: <SiCplusplus />,
  SiC: <SiC />,
  SiMysql: <SiMysql />,
  SiFirebase: <SiFirebase />,
  SiSupabase: <SiSupabase />,
  SiPrisma: <SiPrisma />,
  SiExpo: <SiExpo />,
  SiVite: <SiVite />
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();  // Assuming getSkills fetches the skills data
      setSkillsData(data);
    }

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">
                  {iconMap[skill.icon] || <FaReact />}  {/* Default to FaReact if no icon is found */}
                </div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
