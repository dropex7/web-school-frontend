import React from "react";
import { Link } from "react-router-dom";
import telegramIcon from "../../../assets/icons/telegram.svg";
import rabbitIcon from "../../../assets/icons/rabbit.png";
import "./HomeHeader.css";

export const HomeHeader = () => {
  return (
    <header className="home_header">
      <div>
        <Link to="/">
          <button className="home_header_btn">Выйти</button>
        </Link>
      </div>
      <div className="home_header_info">
        <img
          className="home_header_info_icon"
          src={rabbitIcon}
          alt="telegram"
        />
        <span className="home_header_info_name">Следуй за белым кроликом</span>
      </div>
      <img
        className="home_header_info_icon_telegram"
        src={telegramIcon}
        alt="telegram"
      />
    </header>
  );
};
