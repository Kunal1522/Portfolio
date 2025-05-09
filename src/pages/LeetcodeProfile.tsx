import React from 'react';
import './LeetcodeProfile.css';
import leetcodeData from '../data/leetcodeData.json';
import { FaCode, FaStar, FaFire, FaTrophy } from 'react-icons/fa';

const LeetcodeProfile: React.FC = () => {
  return (
    <div className="leetcode-container">
      <div className="leetcode-header">
        <h1>LeetCode Profile</h1>
        <div className="leetcode-stats">
          <div className="stat-card">
            <FaCode className="stat-icon" />
            <div className="stat-value">{leetcodeData.problemsSolved}</div>
            <div className="stat-label">Problems Solved</div>
          </div>
          <div className="stat-card">
            <FaStar className="stat-icon" />
            <div className="stat-value">{leetcodeData.rank}</div>
            <div className="stat-label">Current Rank</div>
          </div>
          <div className="stat-card">
            <FaTrophy className="stat-icon" />
            <div className="stat-value">{leetcodeData.contestRating}</div>
            <div className="stat-label">Contest Rating</div>
          </div>
          <div className="stat-card">
            <FaFire className="stat-icon" />
            <div className="stat-value">{leetcodeData.streak}</div>
            <div className="stat-label">Day Streak</div>
          </div>
        </div>
      </div>

      <div className="leetcode-sections">
        <div className="leetcode-section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            {leetcodeData.achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-text">{achievement}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="leetcode-section">
          <h2>Strong Topics</h2>
          <div className="topics-grid">
            {leetcodeData.strongTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                {topic}
              </div>
            ))}
          </div>
        </div>

        <div className="leetcode-section">
          <h2>Favourite Problems</h2>
          <div className="submissions-list">
            {leetcodeData.favProblems.map((submission, index) => (
              <div key={index} className="submission-card">
                <div className="submission-problem">{submission.problem}</div>
                <div className={`submission-difficulty ${submission.difficulty.toLowerCase()}`}>
                  {submission.difficulty}
                </div>
                <div className="submission-language">{submission.language}</div>
                <div className="submission-runtime">{submission.runtime}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeProfile;
