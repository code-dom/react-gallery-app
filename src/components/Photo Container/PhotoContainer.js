import React from "react";
import Photo from "./Photo/Photo";
import "../../styles/index.css";

const Photos = ({ images, statement }) => {
  return (
    <div className='container'>
      <div className='photo-container'>
        <h2>{statement}</h2>
        <ul>
          {images.map((image) => {
            let src = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
            return <Photo key={image.id} src={src} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Photos;
