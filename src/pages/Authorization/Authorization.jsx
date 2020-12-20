import React from "react";
import "./Authorization.css";

export default function Authorization() {
  return (
    <div className="authorization">
      <div className="authorization_window">
        <div className="authorization_window_header">
          <h3>Вход в систему</h3>
        </div>
        <form className="authorization_form" action="">
          <input
            className="authorization_form_login"
            type="text"
            placeholder="Логин"
          />
          <input
            className="authorization_form_password"
            type="password"
            placeholder="Пароль"
          />
          <button className="authorization_form_btn">Войти в систему</button>
          <div className="authorization_form_register">
            <div>
              <p>
                <span>Если у вас нет аккаунта</span>
              </p>
              <p>
                <a href="#">Свяжитесь с нами</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
