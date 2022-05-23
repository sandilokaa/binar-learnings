import React from "react";
import { render } from "react-dom";
import './index.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateData from "./pages/CreateData";
import UpdateData from "./pages/UpdateData";
import DeleteData from "./pages/DeleteData";

const root = document.getElementById('root');
render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/createdata" element={<CreateData />}></Route>
      <Route path="/update/:id" element={<UpdateData />}></Route>
      <Route path="/delete/:id" element={<DeleteData />}></Route>
    </Routes>
  </Router>,
  root
);
