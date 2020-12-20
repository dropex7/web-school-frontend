import React from "react";
import { Link } from "react-router-dom";
import headerBackground from "../../../../assets/headerBackground.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="root-header">
      <header className="header">
        <div className="header_text">
          <p>
            <span className="header_text_1"> Следуй за </span> <br />
            <span className="header_text_2"> белым </span> <br />
            <span className="header_text_3"> кроликом </span>
          </p>
        </div>
        <div className="header_navbar">
          <a href="vk.com"> Главная </a> <a href="vk.com"> Условия </a>
          <a href="vk.com"> Отзывы </a> <a href="vk.com"> Связаться с нами </a>
        </div>
      </header>
      <div className="header_info">
        <div>
          <p className="header_info_text">
            Начните обучение <br /> будущей профессии <br /> уже сейчас
          </p>
          <Link to="/autorization">
            <button className="header_info_btn">Войти в систему</button>
          </Link>
        </div>
        <img src={headerBackground} alt="" />
      </div>
    </div>
  );
}
