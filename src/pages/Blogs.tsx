import React from 'react';
import './Blogs.css';
import { FaInfoCircle } from 'react-icons/fa';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <div className="no-blogs-message">
        <FaInfoCircle className="info-icon" />
        <h3>No blogs here</h3>
        <p>Will be added in future</p>
      </div>
    </div>
  );
};

export default Blogs;
