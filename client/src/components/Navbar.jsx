import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const BookstoreNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/auth');
  };

  useEffect(() => {
    const tokenCheck = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    tokenCheck();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/1.png" alt="BookBazaar Logo" className="me-2" style={{ height: '70px', width:'150px' }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/books">Browse</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/donate">Donate</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search books" />
            <button className="btn search-btn" type="submit">Search</button>
          </form>

          <div className="d-flex align-items-center gap-3">
            <Link to="/wishlist" className="text-dark fs-5">❤️</Link>
            <Link to="/cart" className="text-dark fs-5">🛒</Link>

            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">Logout</button>
            ) : (
              <Link to="/auth" className="btn btn-outline-primary btn-sm">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BookstoreNavbar;