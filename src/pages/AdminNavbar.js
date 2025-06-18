import React, { useState } from 'react';
import './Navbar.css';
import {
  FaChartPie, FaSignOutAlt, FaBars,
  FaClipboardList, FaFilePdf, FaPlusSquare, FaUsers
} from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';

function AdminNavbar({ onLogoutClick }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    
    { path: '/add-product', label: 'Products', icon: <FaPlusSquare /> },
    
  ];

  return (
    <>
      <nav className="navbar">
        
        <div className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-btn ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.icon} {item.label}
            </Link>
          ))}
          {/*<span onClick={onLogoutClick} className="nav-btn logout-btn">
            <FaSignOutAlt /> Logout
          </span> */}
        </div>
        <div className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaBars />
        </div>
      </nav>

      {showMobileMenu && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-btn ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setShowMobileMenu(false)}
            >
              {item.icon} {item.label}
            </Link>
          ))}{/*
          <span onClick={onLogoutClick} className="nav-btn logout-btn">
            <FaSignOutAlt /> Logout
          </span> */}
        </div>
      )}
    </>
  );
}

export default AdminNavbar;
