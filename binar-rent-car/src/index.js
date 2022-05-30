import React from "react";
import { render } from "react-dom";
import './index.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./pages/CarList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/car-list" element={<CarList />}></Route>
      </Routes>
    </Router>
  </Provider>,
  root
);
