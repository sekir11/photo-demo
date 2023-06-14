import React from "react";
import { useNavigate } from "react-router-dom";

const Confirm = ({ uri }) => {
  const navigate = new useNavigate();
  const next = () => {
    navigate(`${process.env.PUBLIC_URL}/create`);
  };
  return (
    <div>
      <img src={uri} alt="image2" />
      <button onClick={next}>次へ</button>
    </div>
  );
};

export default Confirm;
