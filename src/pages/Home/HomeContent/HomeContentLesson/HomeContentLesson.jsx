import React, { useState, useEffect } from "react";
import { getTasks } from "../../../../DataLoader";
import nextIcon from "../../../../assets/icons/next.svg";
import prevIcon from "../../../../assets/icons/prev.svg";
import "./HomeContentLesson.css";

export const HomeContentLesson = (props) => {
  const [tasks, setTasks] = useState(null);
  const [right, setRight] = useState(null);
  const [userAns, setUserAns] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => {
    const load = async () => {
      const tempTasks = await getTasks(props.lessonid);
      setTasks(tempTasks.tasks);
      setRight(tempTasks.tasks[i].right_answer);
    };
    load();
  });

  // const getQuestions = () => {
  //   let tempArr = answers;
  //   function shuffle(array) {
  //     array.sort(() => Math.random() - 0.5);
  //   }
  //   shuffle(tempArr);
  //   setAnswers(tempArr);
  // };

  const handleChangeTest = (event) => {
    setUserAns(event.target.value);
  };

  const onClickAns = () => {
    setDisabled(true);
    if (right === userAns) {
      alert("Правильный ответ!");
    } else {
      alert("Неправильный ответ!");
    }
  };
  if (!tasks) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="home_content_lesson">
        <div className="home_content_lesson_video">
          <iframe
            title={tasks[0].lesson_name}
            width="660"
            height="415"
            src={props.youtube}
            frameborder="0"
          ></iframe>
        </div>
        <div className="home_content_lesson_form">
          <div>
            <button
              className="home_content_lesson_form_nextprev"
              onClick={() => {
                if (i > 0) {
                  setDisabled(false);
                  setI(i - 1);
                }
              }}
            >
              <img src={prevIcon} alt="prev" />
            </button>
          </div>
          <div
            className="home_content_lesson_form_questions"
            onChange={handleChangeTest}
          >
            <div>
              <div>
                <h2>{tasks[i].question}?</h2>
              </div>
              <div className="home_content_lesson_form_ans">
                <input
                  disabled={disabled}
                  type="radio"
                  name="tasks"
                  value={tasks[i].right_answer}
                />
                {tasks[i].right_answer}
              </div>
              <div className="home_content_lesson_form_ans">
                <input
                  disabled={disabled}
                  type="radio"
                  name="tasks"
                  value={tasks[i].wrong_answer_1}
                />
                {tasks[i].wrong_answer_1}
              </div>
              <div className="home_content_lesson_form_ans">
                <input
                  disabled={disabled}
                  type="radio"
                  name="tasks"
                  value={tasks[i].wrong_answer_2}
                />
                {tasks[i].wrong_answer_2}
              </div>
              <div className="home_content_lesson_form_ans">
                <input
                  disabled={disabled}
                  type="radio"
                  name="tasks"
                  value={tasks[i].wrong_answer_3}
                />
                {tasks[i].wrong_answer_3}
              </div>
            </div>
            <button
              className="home_content_lesson_form_questions_btn"
              disabled={disabled}
              onClick={onClickAns}
            >
              Ответить
            </button>
          </div>
          <div>
            <button
              className="home_content_lesson_form_nextprev"
              onClick={() => {
                if (i < tasks.length - 1) {
                  setDisabled(false);
                  setI(i + 1);
                }
              }}
            >
              <img src={nextIcon} alt="next" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};
