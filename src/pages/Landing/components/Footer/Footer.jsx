import React from "react";
import "./Footer.css";
import mailIcon from "../../../../assets/icons/mail.svg";
import instIcon from "../../../../assets/icons/inst.svg";
import adressIcon from "../../../../assets/icons/adress.svg";
import youtubeIcon from "../../../../assets/icons/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_sections">
        <h3>Разделы</h3>
        <a href="#">
          <span>О нас</span>
        </a>
        <a href="#">
          <span>Условия курса</span>
        </a>
        <a href="#">
          <span>Политика конфиденциальности</span>
        </a>
      </div>
      <div className="footer_contacts">
        <h3>Свяжитесь с нами</h3>
        <a href="#">
          <img src={mailIcon} alt="" />
          <span>fexful@gmail.com</span>
        </a>
        <a href="#">
          <img src={adressIcon} alt="" />
          <span>
            Санкт-Петербург, Кронверкский пр., 49,
            <br /> 197101
          </span>
        </a>
      </div>
      <div className="footer_media">
        <h3>Подпишитесь на нас в соц. сетях</h3>
        <a href="#">
          <img src={instIcon} alt="" />
          <span>Instargam</span>
        </a>
        <a href="#">
          <img src={youtubeIcon} alt="" />
          <span>Youtube</span>
        </a>
      </div>
    </footer>
  );
}
