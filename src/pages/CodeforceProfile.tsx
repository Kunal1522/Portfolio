import React from 'react';
import './CodeforceProfile.css';
import codeforcesData from '../data/codeforcesData.json';
import { FaTrophy, FaCode, FaChartLine, FaMedal } from 'react-icons/fa';

const CodeforceProfile: React.FC = () => {
  return (
    <div className="codeforces-container">
      <div className="codeforces-header">
        <h1>Codeforces Profile</h1>
        <div className="codeforces-stats">
          <div className="stat-card">
            <FaCode className="stat-icon" />
            <div className="stat-value">{codeforcesData.problemsSolved}</div>
            <div className="stat-label">Problems Solved</div>
          </div>
          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <div className="stat-value">{codeforcesData.rating}</div>
            <div className="stat-label">Current Rating</div>
          </div>
          <div className="stat-card">
            <FaTrophy className="stat-icon" />
            <div className="stat-value">{codeforcesData.contests}</div>
            <div className="stat-label">Contests</div>
          </div>
          <div className="stat-card">
            <FaMedal className="stat-icon" />
            <div className="stat-value">{codeforcesData.rank}</div>
            <div className="stat-label">Current Rank</div>
          </div>
        </div>
      </div>

      <div className="codeforces-sections">
        <div className="codeforces-section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            {codeforcesData.achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-text">{achievement}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="codeforces-section">
          <h2>Favorite Topics</h2>
          <div className="topics-grid">
            {codeforcesData.favoriteTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                {topic}
              </div>
            ))}
          </div>
        </div>

        <div className="codeforces-section">
          <h2>Favourite Problems</h2>
          <div className="submissions-list">
            {codeforcesData.favproblems.map((submission, index) => (
              <div key={index} className="submission-card">
                <div className="submission-problem">{submission.problem}</div>
                <div className="submission-contest">{submission.contest}</div>
                <div className={`submission-verdict ${submission.verdict === 'Accepted' ? 'accepted' : 'rejected'}`}>
                  {submission.verdict}
                </div>
                <div className="submission-language">{submission.language}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeforceProfile;
