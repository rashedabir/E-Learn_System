import React, { useContext } from "react";
import Carousel from "react-grid-carousel";
import { GlobalState } from "../../../GlobalState";
import StudentCoursesCard from "../StudentCoursesCard/StudentCoursesCard";
import { useStyle } from "./styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
const StudentCourses = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [list] = state.userAPI.list;
  const [loading] = state.userAPI.loading;

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Box>
          <Typography variant="h3" className={classes.dashboard}>
            Dashboard
          </Typography>
          <Carousel cols={4} rows={1} gap={20} loop>
            {list &&
              list?.length > 0 &&
              list?.map((course, i) => (
                <Carousel.Item key={i}>
                  <StudentCoursesCard course={course?.courseDetails} />
                </Carousel.Item>
              ))}
          </Carousel>
        </Box>
      )}
    </div>
  );
};

export default StudentCourses;
