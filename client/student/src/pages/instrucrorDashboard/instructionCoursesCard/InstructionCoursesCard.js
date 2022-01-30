import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const InstructionCoursesCard = ({ course }) => {
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
            <Link to={`/course/${course?._id}`}>{course?.title}</Link>
          </h1>
        </Card>
      </div>
    </div>
  );
};

export default InstructionCoursesCard;
