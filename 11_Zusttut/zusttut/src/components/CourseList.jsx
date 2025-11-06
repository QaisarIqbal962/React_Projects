import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
  );

  return (
    <ul>
      {courses.map((course) => (
        <li
          key={course.id}
          className="course-item"
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <input
            checked={course.completed}
            type="checkbox"
            onChange={() => toggleCourseStatus(course.id)}
          />
          <span
            style={{
              textDecoration: course.completed ? "line-through" : "none",
            }}
          >
            {course?.title}
          </span>
          <button
            onClick={() => removeCourse(course.id)}
            className="delete-btn"
            style={{
              marginLeft: "auto",
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>

         
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
