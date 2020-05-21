import React from "react";
import "../../styles/index.css";

const Photos = ({ images }) => {
  return (
    <div className='photo-container'>
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
  );
};

export default Photos;
