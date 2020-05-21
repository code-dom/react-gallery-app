import React from "react";
import "../../styles/index.css";

const Photos = ({ images }) => {
  return (
    <div className='container'>
      <div className='photo-container'>
        <h2>Results</h2>
        <ul>
          {images.map((image) => {
            let src = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
            return (
              <li key={image.id}>
                <img src={src} alt='' />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Photos;
