import "./TheoryAndPractice.css";
import { Link } from "react-router-dom";

export default function TheoryAndPractice() {
  return (
    <section className="section-tap">
      <section className="cources-card">
        <div className="card-tap"></div>
        <h3 className="h2-card">У нас есть курсы по следующим направлениям</h3>
        <button className="btn-card" style={{ left: "527px", width: "121px" }}>
          <p className="p-btn-text">JAVA</p>
        </button>
        <button className="btn-card" style={{ left: "695px", width: "259px" }}>
          <p className="p-btn-text">JavaScript/HTML/CSS</p>
        </button>
        <button className="btn-card" style={{ left: "1001px", width: "108px" }}>
          <p className="p-btn-text">C++</p>
        </button>
        <button className="btn-card" style={{ left: "1156px", width: "99px" }}>
          <p className="p-btn-text">C#</p>
        </button>
      </section>
      <section className="main-section">
        <h1 className="h1-tap">Не только теория, но и практика</h1>
        <p className="p-under-tap">
          Наши курсы построены по специальной методике и благодаря практическим
          заданиям на курсах, материал будет усваиваться гораздо лучше, чем на
          обычных курсах или с помощью книги
        </p>
        <div className="div-start-learing" id="learning-first">
          <h3 className="h3-tasks">Задания</h3>
          <p className="under-tasks">
            При выполнении которых вы будете прокачивать свои скиллы
          </p>
          <Link to="/autorization">
            <button className="btn-start-learning">
              <p className="text-btn-learning">Начать обучение</p>
            </button>
          </Link>
        </div>
        <div className="div-start-learing" id="learning-second">
          <h3 className="h3-tasks">Удобная платформа</h3>
          <p className="under-tasks">
            Платформа имеет удобный интерфейс, отчего Ваше обучение пройдет
            максимально эффективно
          </p>
          <Link to="/autorization">
            <button className="btn-start-learning">
              <p className="text-btn-learning">Начать обучение</p>
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}
