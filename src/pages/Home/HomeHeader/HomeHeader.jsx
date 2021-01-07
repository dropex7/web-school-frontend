import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "rc-progress";
import { getProgress } from "../../../DataLoader";
import rabbitIcon from "../../../assets/icons/rabbit.png";
import "./HomeHeader.css";

export const HomeHeader = ({ userID }) => {
  const [checkedCourses, setCheckedCourses] = useState([]);
  useEffect(() => {
    const load = async () => {
      const progressData = await getProgress(userID);
      setCheckedCourses(progressData.progress[0] ? progressData.progress[0].finished_lessons : []);
    };
    load();
  }, []);
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
      <div style={{ margin: 10, width: 150 }}>
        <span className="home_header_info_progress">{`Ваш прогресс: ${Math.floor((checkedCourses.length / 6) * 100)
          }%`}</span>
        <Line
          strokeWidth="5"
          percent={(checkedCourses.length / 6) * 100}
          strokeColor="#e4e3ef"
        />
      </div>
    </header>
  );
};
