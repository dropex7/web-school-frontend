import Vector from "../../../../assets/Vector.svg";

import "./TermsOfCourses.css";

export default function Courses() {
  return (
    <div>
      <div className="background-relative">
        <section className="background-absolute"></section>
      </div>
      <section className="section-terms">
        <h1 className="h1-terms">Условия курса</h1>
      </section>
      <section className="section-cards">
        <div className="block-main-card">
          <h2 className="h2-card-title">
            <a href="vk.com">Трайхардер</a>
          </h2>
          <p className="p-card-description">
            Для тех, кто устал ждать и хочет изменить свю судьбу в лучшую
            сторону, благодаря IT сфере.
            <br />
            <br />
            Условия:
          </p>
          <p className="p-terms">Все курсы</p>
          <p className="p-terms">
            Задание, добавление в общий чат в Telegram и общение с препода-
            вателями через чат, а так же через скайп
          </p>
          <p className="p-terms">9 999 рублей / месяц</p>
          <div className="button-wrapper">
            <button className="button-vector">
              <img src={Vector} alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
