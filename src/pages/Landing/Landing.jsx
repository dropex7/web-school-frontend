import React from "react";

import { Header } from "./components/Header"
import { TermsOfCourses } from "./components/TermsOfCourses"
import { Footer } from "./components/Footer"
import { OurStudents } from "./components/OurStudens"
import { OurTeachers } from "./components/OurTeachers";
import { TheoryAndPractice } from "./components/TheoryAndPractice";

import "./Landing.css"

export default function Landing() {
  return (
    <div className="App">
      <div className="landing">
        <Header />
        <TheoryAndPractice />
        <TermsOfCourses />
        <OurStudents />
        <OurTeachers />
        <Footer />
      </div>
    </div>
  );
}
