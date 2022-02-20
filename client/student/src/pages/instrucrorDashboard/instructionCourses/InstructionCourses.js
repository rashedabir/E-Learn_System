import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import { GlobalState } from "../../../GlobalState";
import InstructionCoursesCard from "../instructionCoursesCard/InstructionCoursesCard";
import { useStyle } from "./styles";

const InstructionCourses = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    //get course list
    const getCourse = async () => {
      await axios
        .get("https://e-learn-bd.herokuapp.com/api/course", {
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
      <h1 className={classes.dashboard}>Dashboard</h1>
      <Carousel cols={4} rows={1} gap={20} loop>
        {courseList?.length > 0 &&
          courseList
            ?.slice(0)
            .reverse()
            ?.map((course, i) => (
              <Carousel.Item key={i}>
                <InstructionCoursesCard course={course} />
              </Carousel.Item>
            ))}
      </Carousel>
    </div>
  );
};

export default InstructionCourses;
