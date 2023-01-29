import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './custom.scss';
import Main from "./main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
