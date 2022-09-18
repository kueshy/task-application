import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";
import Form from "./Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
