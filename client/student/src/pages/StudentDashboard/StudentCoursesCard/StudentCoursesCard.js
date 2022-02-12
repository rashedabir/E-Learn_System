import { Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const StudentCoursesCard = ({ course }) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Card sx={{ border: "none", boxShadow: "none" }}>
          <img
            className={classes.cardimg}
            width="100%"
            src={course?.banner?.url}
            alt={course?.title}
          />
          <button className={classes.tag}>{course?.category}</button>
          <h1 className={classes.heading}>
            <Typography component={Link} to={`/single_course_details/${course?._id}`}>
              {course?.title}
            </Typography>
          </h1>
        </Card>
      </div>
    </div>
  );
};

export default StudentCoursesCard;