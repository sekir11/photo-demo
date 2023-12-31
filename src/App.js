import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Create from "./component/Create";
import Login from "./component/Login";
import Confirm from "./component/Confirm";
import Take from "./component/Take";
import { useState } from "react";

function App() {
  const [uri, setUri] = useState();

  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/home`}
          element={<Home />}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/create`}
          element={<Create />}
        ></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />}></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/take`}
          element={<Take setUri={setUri} />}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/confirm`}
          element={<Confirm uri={uri} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
