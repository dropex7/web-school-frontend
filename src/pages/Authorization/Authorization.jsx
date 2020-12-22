import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { message } from 'antd'
import "./Authorization.css"

export default function Authorization() {
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const loginHandler = async () => {
    try {
      if (login && password) {
        setLoading(true)
        let body = { login, password }
        body = JSON.stringify(body)
        const method = "POST"
        const headers = { contentType: 'application/json' }
        headers['Content-Type'] = 'application/json'
        const response = await fetch('/auth/login', { method, body, headers })
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message)
        }
        setLoading(false)
        return (
          <Redirect to="/home" />
        )
      } else {
        message.warning('Enter login and password')
      }
    } catch (error) {
      message.error(error.message)
    }
  }
  return (
    <div className="authorization">
      <div className="authorization_window">
        <div className="authorization_window_header">
          <h3>Вход в систему</h3>
        </div>
        <form className="authorization_form" action="">
          <input
            onInput={(e) => setLogin(e.target.value)}
            className="authorization_form_login"
            type="text"
            placeholder="Логин"
          />
          <input
            onInput={(e) => setPassword(e.target.value)}
            className="authorization_form_password"
            type="password"
            placeholder="Пароль"
          />
          <button onClick={loginHandler} className="authorization_form_btn">
            Войти в систему
          </button>
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
