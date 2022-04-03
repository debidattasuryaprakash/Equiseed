import React from "react";
import "./App.css";
import Table from "./components/table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetailsPage from "./components/eventDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
