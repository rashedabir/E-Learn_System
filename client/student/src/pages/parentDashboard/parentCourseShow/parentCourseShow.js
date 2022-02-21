import React from "react";
import { useStyle } from "./styles";
import {
  Card,
  Container,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const ParentCourseShow = ({course}) => {
  const classes = useStyle();

  return (
    <div>
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Courses
        </Typography>

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
                <Typography
                  component={Link}
                  to={`/parent_course_details/${course?._id}`}
                >
                  {" "}
                  title
                </Typography>
              </h1>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

export default ParentCourseShow;
