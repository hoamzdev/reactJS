import { useEffect, useState } from "react"
import Button from "./components/Button";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink style={{ marginRight: '10px' }} to="/">Trang chủ</NavLink>
        <NavLink to="/about">Giới thiệu</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>404 - Không tìm thấy trang!</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}