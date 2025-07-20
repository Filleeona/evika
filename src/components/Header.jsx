import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [language, setLanguage] = useState("RU");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className={`header ${isScrolled ? "headerScrolled" : ""}`}>
      <div className="headerContainer">
        <Link to="/" className="logo">
          <img src="../src/assets/logo.png" alt="Evika logo" />
        </Link>
        <div className="headerOptions">
          <nav className="nav">
            <NavLink
              to="/payment"
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              Оплата
            </NavLink>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              Карта
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              О нас
            </NavLink>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              Обратная связь
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              Новости
            </NavLink>
          </nav>
          <button className="appButton">Приложение</button>
          <select
            className="languageSelect"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="RU">RU</option>
            <option value="BE">BE</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
