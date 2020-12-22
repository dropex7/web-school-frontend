import React, { useEffect, useState } from "react";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeFooter } from "./HomeFooter/HomeFooter";
import { HomeContent } from "./HomeContent/HomeContent";
import { getCourses } from "../../DataLoader.js";

export const Home = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const load = async () => {
      const tempData = await getCourses();
      setCourses(tempData);
      return 0;
    };
    load();
  }, []);
  if (!courses) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <HomeHeader />
        <HomeContent courses={courses.courses} />
        <HomeFooter />
      </div>
    );
  }
};
