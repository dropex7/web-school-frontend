import React from "react";
import { ContentCourseList } from "./ContentCourseList/ContentCourseList";
import "./HomeContent.css";

export const HomeContent = () => {
  return (
    <div className="home_content">
      <ContentCourseList />
    </div>
  );
};
