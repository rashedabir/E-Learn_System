import { Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const StudentCoursesCard = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Card sx={{ border: "none", boxShadow: "none" }}>
          <img
            className={classes.cardimg}
            width="100%"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <button className={classes.tag}>React</button>
          <h1 className={classes.heading}>
            <Typography
            // component={Link}
            // to={`/course_details/${course?._id}`}
            >
              React JS
            </Typography>
          </h1>
        </Card>
      </div>
    </div>
  );
};

export default StudentCoursesCard;
