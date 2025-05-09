// Reading.tsx

import React from 'react';
import './Reading.css';

// Book cover images
const cantHurtMe = "canthurtme.jpg";
const deepFocus = "deepfocus.jpg";
const subtleArt = "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg";

const books = [
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    imgSrc: cantHurtMe,
    description: "Master Your Mind and Defy the Odds - A powerful memoir about overcoming obstacles and pushing past limits.",
  },
  {
    title: "Deep Focus",
    author: "Cal Newport",
    imgSrc: deepFocus,
    description: "Rules for Focused Success in a Distracted World - How to work with concentration in a world full of distractions.",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    imgSrc: subtleArt,
    description: "A Counterintuitive Approach to Living a Good Life - A refreshing perspective on how to find what truly matters.",
  }
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
