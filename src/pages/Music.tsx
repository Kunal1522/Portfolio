import React from 'react';
import './Music.css';

// We'll use placeholder images since we don't have the actual images in the project
const brownRangImg = "Brownrang.jpg"; // Placeholder for the actual image
const dopeShopImg = "DopeShope.jpg"; // Placeholder for the actual image
const oMaahiImg = "omaahi.jpg"; // Placeholder for the actual image
const afterDarkImg = "afterdark.png"; // Placeholder for the actual image

const favoriteAlbums = [
  { title: "Brown Rang", artist: "Yo Yo Honey Singh", imgSrc: brownRangImg },
  { title: "Dope Shope", artist: "Yo Yo Honey Singh", imgSrc: dopeShopImg },
  { title: "O Maahi", artist: "Arijit Singh", imgSrc: oMaahiImg },
  { title: "After Dark", artist: "Mr.Kitty", imgSrc: afterDarkImg }
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>"Music gives a soul to the universe, wings to the mind, flight to the imagination." 🎵</p>
      </div>

      <div className="albums-section">
        <h3>Favorite Tracks</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div 
              key={index} 
              className="album-card" 
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
