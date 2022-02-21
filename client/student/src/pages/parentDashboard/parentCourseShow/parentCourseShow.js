import React from "react";
import { useStyle } from "./styles";
import {
  Card,
  Container,
  Typography,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const ParentCourseShow = () => {
  const classes = useStyle();

  return (
    <div>
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Courses
        </Typography>
        <Link to="/parent_course_details">
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <img
                  className={classes.cardimg}
                  width="100%"
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt="im"
                />
                <button className={classes.tag}>Category</button>
                <h1 className={classes.heading}>
                  <Typography>title</Typography>
                </h1>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Container>
    </div>
  );
};

export default ParentCourseShow;
