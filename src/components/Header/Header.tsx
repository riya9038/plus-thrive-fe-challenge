import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import chatIcon from "../../assets/chat.svg";

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = useState("home");

  const handleActive = (tab: string) => {
    setActiveNav(tab);
  };
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} />
        <p>Thriday</p>
      </div>
      <nav className="nav-menu">
        <a
          href="#"
          className={`nav-item ${activeNav === "home" ? "active" : ""}`}
          onClick={() => handleActive("home")}
        >
          Home
        </a>
        <a
          href="#"
          className={`nav-item ${activeNav === "accounts" ? "active" : ""}`}
          onClick={() => handleActive("accounts")}
        >
          Accounts
        </a>
        <a
          href="#"
          className={`nav-item ${activeNav === "payments" ? "active" : ""}`}
          onClick={() => handleActive("payments")}
        >
          Payments
        </a>
        <a
          href="#"
          className={`nav-item ${activeNav === "invoices" ? "active" : ""}`}
          onClick={() => handleActive("invoices")}
        >
          Invoices
        </a>
        <a
          href="#"
          className={`nav-item ${activeNav === "tax" ? "active" : ""}`}
          onClick={() => handleActive("tax")}
        >
          Tax
        </a>
        <a
          href="#"
          className={`nav-item ${activeNav === "settings" ? "active" : ""}`}
          onClick={() => handleActive("settings")}
        >
          Settings
        </a>
      </nav>
      <div className="header-actions">
        <button className="chat-button">Chat with us</button>
        <img src={chatIcon} />
        <div className="user-avatar">NS</div>
      </div>
    </header>
  );
};

export default Header;
