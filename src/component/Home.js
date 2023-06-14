import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [date, setDate] = useState();

  const navigate = new useNavigate();
  const create = () => {
    navigate("/create");
  };

  useEffect(() => {
    const now = new Date();
    setDate(
      now.getFullYear() +
        "年" +
        (now.getMonth() + 1) +
        "月" +
        now.getDate() +
        "日"
    );
  });

  return (
    <div>
      <h3>{date}</h3>
      <h3>◯◯店</h3>

      <button onClick={create}>新規登録</button>
    </div>
  );
};

export default Home;
