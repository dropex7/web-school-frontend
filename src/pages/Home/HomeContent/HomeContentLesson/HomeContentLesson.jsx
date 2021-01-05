import React, { useState, useEffect } from "react";
import { getTasks } from "../../../../DataLoader";
import nextIcon from "../../../../assets/icons/next.svg";
import prevIcon from "../../../../assets/icons/prev.svg";
import like from "../../../../assets/like.svg";
import dislike from "../../../../assets/dislike.svg";
import greenCircle from "../../../../assets/green_circle.svg";
import redCircle from "../../../../assets/red_circle.svg";

import "./HomeContentLesson.css";

export const HomeContentLesson = (props) => {
  const [tasks, setTasks] = useState(null);
  const [right, setRight] = useState(null);
  const [userAns, setUserAns] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isRedCircleVisivle, setIsRedCircleVisivle] = useState(false);
  const [isGreenCircleVisivle, setIsGreenCircleVisivle] = useState(false);
  const [isLikeVisivle, setIsLikeVisivle] = useState(false);
  const [isDislikeVisivle, setIsDislikeVisivle] = useState(false);
  const [nextAvailable, setNextAvailable] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => {
    const load = async () => {
      const tempTasks = await getTasks(props.lessonid);
      setTasks(tempTasks.tasks);
      setRight(tempTasks.tasks[i].right_answer);
    };
    load();
  });

  const handleChangeTest = (event) => {
    setUserAns(event.target.value);
  };

  const onClickAns = () => {
    setDisabled(true);
    setNextAvailable(true);
    if (right === userAns) {
      setIsGreenCircleVisivle(true);
      setIsLikeVisivle(true);
      setTimeout(() => {
        setIsGreenCircleVisivle(false);
        setIsLikeVisivle(false);
      }, 2000);
    } else {
      setIsRedCircleVisivle(true);
      setIsDislikeVisivle(true);
      setTimeout(() => {
        setIsRedCircleVisivle(false);
        setIsDislikeVisivle(false);
      }, 2000);
    }
    if(i === tasks.length - 1){
      //вызов функции родителя
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
        <div
          className="home_content_circle"
          style={
            isGreenCircleVisivle ? { display: "block" } : { display: "none" }
          }
        >
          <img src={greenCircle} />
        </div>
        <div
          className="home_content_like"
          style={isLikeVisivle ? { display: "block" } : { display: "none" }}
        >
          <img src={like} />
        </div>
        <div
          className="home_content_circle"
          style={
            isRedCircleVisivle ? { display: "block" } : { display: "none" }
          }
        >
          <img src={redCircle} />
        </div>
        <div
          className="home_content_dislike"
          style={isDislikeVisivle ? { display: "block" } : { display: "none" }}
        >
          <img src={dislike} />
        </div>
        <div className="home_content_lesson_form">
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
                if (nextAvailable) {
                  if (i < tasks.length - 1) {
                    setNextAvailable(false);
                    setDisabled(false);
                    setI(i + 1);
                  }
                }
              }}
            >
              <img src={nextIcon} alt="next" />
            </button>
            <span>
              Question number {i + 1} of {tasks.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
};
