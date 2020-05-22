import React from "react";
import "../../../styles/index.css";

const Photo = ({ src }) => {
  return (
    <li>
      <img src={src} alt='' />
    </li>
  );
};

export default Photo;
