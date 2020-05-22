import React, { useState } from "react";
import "../../styles/index.css";

const Photos = ({ images }) => {
  const [statement, setStatement] = useState("");
  if (images === null) {
    setStatement("Your search did not return any results. Please try again.");
  } else {
    setStatement("Results");
  }

  return (
    <div className='container'>
      <div className='photo-container'>
        <h2>{statement}</h2>
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
