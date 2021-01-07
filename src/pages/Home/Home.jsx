import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeFooter } from "./HomeFooter/HomeFooter";
import { HomeContent } from "./HomeContent/HomeContent";
import { getCourses, postCourseId } from "../../DataLoader.js";

export const Home = () => {
  const [courses, setCourses] = useState(null);
  let query = new URLSearchParams(useLocation().search);
  const [id, setID] = useState(query.get("id"));

  useEffect(() => {
    const load = async () => {
      const tempData = await getCourses();
      setCourses(tempData);
      return 0;
    };
    load();
  }, []);

  const addNewCheckedCourse = (courseId) => {
    // if (!checkedCourses.includes(id)) {
    //   setCheckedCourses([...checkedCourses, id]);
    // }
    postCourseId(id, courseId);
    // console.log(checkedCourses);
  };

  if (!courses) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <HomeHeader userID={id} />
        <HomeContent
          courses={courses.courses}
          addNewCourse={addNewCheckedCourse}
        />
        <HomeFooter />
      </div>
    );
  }
};
