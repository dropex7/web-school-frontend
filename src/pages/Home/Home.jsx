import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeFooter } from "./HomeFooter/HomeFooter";
import { HomeContent } from "./HomeContent/HomeContent";
import { getCourses, getProgress } from "../../DataLoader.js";

export const Home = () => {
  const [courses, setCourses] = useState(null);
  const [checkedCourses, setCheckedCourses] = useState([]);
  let query = new URLSearchParams(useLocation().search);
  useEffect(() => {
    const load = async () => {
      const tempData = await getCourses();
      const progressData = await getProgress(query.get("id"));
      setCourses(tempData);
      setCheckedCourses(progressData.progress);
      return 0;
    };
    load();
  }, []);

  const addNewCheckedCourse = (id) => {
    if (!checkedCourses.includes(id)) {
      setCheckedCourses([...checkedCourses, id]);
    }
    console.log(checkedCourses);
  };

  if (!courses) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <HomeHeader progress={(checkedCourses.length / 6) * 100} />
        <HomeContent
          courses={courses.courses}
          addNewCourse={addNewCheckedCourse}
        />
        <HomeFooter />
      </div>
    );
  }
};
