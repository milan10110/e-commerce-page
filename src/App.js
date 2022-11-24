import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
