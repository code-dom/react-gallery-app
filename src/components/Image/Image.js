import React from "react";
import "../../styles/index.css";

const Image = ({ src }) => {
  return (
    <div className='photo'>
      <img src={src} alt='' />
    </div>
  );
};

export default Image;
