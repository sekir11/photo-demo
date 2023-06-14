import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = new useNavigate();
  const login = () => {
    navigate(`${process.env.PUBLIC_URL}/home`);
  };
  return (
    <div>
      <h1>Carchive</h1>
      <h3>販売店コード</h3>
      <input type="text" />
      <h3>店舗コード</h3>
      <input type="text" />
      <h3>パスワード</h3>
      <input type="password" />
      <button onClick={login}>ログイン</button>
    </div>
  );
};

export default Login;
