import React from "react";
import { useSelector } from "react-redux";

function CourseList() {
  const courses = useSelector((state) => {
    return state.courses.data;
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div className="panel" key={course.id}>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button className="button is-danger">Sil</button>
      </div>
    );
  });

  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
