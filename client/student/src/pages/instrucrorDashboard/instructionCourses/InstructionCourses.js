import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import InstructionCoursesCard from "../instructionCoursesCard/InstructionCoursesCard";
import axios from "axios";
import { useStyle } from "./styles";
import { GlobalState } from "../../../GlobalState";

const InstructionCourses = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    //get course list
    const getCourse = async () => {
      await axios
        .get("/api/course", {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            setCourseList(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCourse();
  }, [token]);

  return (
    <div className={classes.root}>
      <h1 className={classes.dashboard}>Dashbaord</h1>
      <Carousel cols={4} rows={1} gap={20} loop>
        {courseList?.length > 0 &&
          courseList?.map((course, i) => (
            <Carousel.Item key={i}>
              <InstructionCoursesCard course={course} />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default InstructionCourses;