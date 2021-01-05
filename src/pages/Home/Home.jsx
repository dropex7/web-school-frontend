import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  let { id } = useParams();
  
  if (!courses) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {id}
        <HomeHeader />
        <HomeContent courses={courses.courses} />
        <HomeFooter />
      </div>
    );
  }
};
