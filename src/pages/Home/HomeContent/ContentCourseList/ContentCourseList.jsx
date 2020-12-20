import React from "react";
import JavaIcon from "../../../../assets/icons/javaIcon.jpg";
import "./ContentCouseList.css";

export const ContentCourseList = () => {
  const elNum = [1, 2, 3, 4, 5, 6];
  const listItems = elNum.map((el) => {
    return (
      <div className="content_course_list_card">
        <div className="content_course_list_el">
          <img
            src={JavaIcon}
            className="content_course_list_el_icon"
            alt="Java"
          />
          <span className="content_course_list_el_name">#{el} - Введение в java</span>
          <button className="content_course_list_el_btn">Смотреть</button>
        </div>
      </div>
    );
  });
  return <div className="content_course_list">{listItems}</div>;
};
