import React, { useState } from "react";
import { HomeContentLesson } from "./HomeContentLesson/HomeContentLesson";
import "./HomeContent.css";

export const HomeContent = ({ courses, addNewCourse }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [lessonid, setLessonid] = useState(0);
  const [youtubeLink, setYoutubeLink] = useState("");
  const onClickWatch = (lessonid, youLink) => {
    setIsSelect(true);
    setLessonid(lessonid);
    setYoutubeLink(youLink);
  };

  if (!isSelect) {
    return (
      <div className="content_course_list">
        {courses.map((course) => {
          return (
            <div key={course.lesson_id} className="content_course_list_card">
              <div className="content_course_list_el">
                <img
                  src={course.preview_link}
                  className="content_course_list_el_icon"
                  alt="Java"
                />
                <span className="content_course_list_el_name">
                  {course.lesson_name}
                </span>
                <button
                  onClick={() => {
                    onClickWatch(course.lesson_id, course.video_link);
                    addNewCourse(course.lesson_id);
                  }}
                  className="content_course_list_el_btn"
                >
                  Смотреть
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="home_content_lesson">
        <button
          className="home_content_lesson_btn"
          onClick={() => setIsSelect(false)}
        >
          Вернуться к списку
        </button>
        <HomeContentLesson lessonid={lessonid} youtube={youtubeLink} />
      </div>
    );
  }
};
