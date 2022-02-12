import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import InstructionCoursesCard from "../instructionCoursesCard/InstructionCoursesCard";
import axios from "axios";
import { useStyle } from "./styles";
import { GlobalState } from "../../../GlobalState";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      <h1>Dashbaord</h1>
      {courseList?.length > 0 ?
        <Carousel cols={4} rows={1} gap={20} loop>
          {courseList?.length > 0 &&
            courseList?.map((course, i) => (
              <Carousel.Item key={i}>
                <InstructionCoursesCard course={course} />
              </Carousel.Item>
            ))}
        </Carousel> :
        <div className={classes.nocourse}>
          <h2>No course Found !!!</h2>
          <Button
            sx={{ my: 1, color: "#000", border: "2px solid red" }}
            variant="contained"
            color="primary"
            component={Link}
            to={`/create_course`}
            style={{
              backgroundColor: "#EEE",
              textTransform: "none",
            }}
          >
            Create Your First Course
          </Button>
        </div>
      }
    </div>
  );
};

export default InstructionCourses;
