import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
