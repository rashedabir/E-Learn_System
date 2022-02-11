import React, { useContext } from "react";
import Carousel from "react-grid-carousel";
import { GlobalState } from "../../../GlobalState";
import StudentCoursesCard from "../StudentCoursesCard/StudentCoursesCard";
import { useStyle } from "./styles";

const StudentCourses = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [list] = state.userAPI.list;

  return (
    <div className={classes.root}>
      <h1>Dashbaord</h1>
      <Carousel cols={4} rows={1} gap={20} loop>
        {list &&
          list?.length > 0 &&
          list?.map((course, i) => (
            <Carousel.Item key={i}>
              <StudentCoursesCard course={course?.courseDetails} />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default StudentCourses;
