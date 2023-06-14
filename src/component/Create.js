import React from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = new useNavigate();
  const take = () => {
    navigate(`${process.env.PUBLIC_URL}/take`);
  };
  return (
    <div>
      <h2>撮影項目</h2>
      <button onClick={take}>左前方</button>
    </div>
  );
};

export default Create;
