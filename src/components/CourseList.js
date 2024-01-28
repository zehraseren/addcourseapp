import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => {
    return state.courses.data;
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div className="panel" key={course.id}>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
        >
          Sil
        </button>
      </div>
    );
  });

  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
