import { NavLink, Outlet } from "react-router-dom";
import '../styles/app.css'
export default function MainLayout() {
  return (
    <div>
      {/* //dung NavLink de bam ko load lai trang */}
      <header>
        <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <NavLink to="/" style={{ padding: "8px 16px", background: "#007bff", color: "white", textDecoration: "none", borderRadius: "4px" }}>Home</NavLink>
          <NavLink to="/about" style={{ padding: "8px 16px", background: "#007bff", color: "white", textDecoration: "none", borderRadius: "4px" }}>About</NavLink>
          <NavLink to="/blog/100" style={{ padding: "8px 16px", background: "#28a745", color: "white", textDecoration: "none", borderRadius: "4px" }}>Blog</NavLink>
        </nav>
      </header>
      <div className="app">
        <Outlet />
      </div>
    </div>
  )
}