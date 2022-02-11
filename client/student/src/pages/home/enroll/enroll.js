import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useStyles } from "./styles";

const EnrollStudent = () => {
  const classes = useStyles();
  const state = useContext(GlobalState);
  const addList = state.userAPI.addList;
  const [list] = state.userAPI.list;
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [enrolled, setEnrolled] = useState(false);

  console.log(list);

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        await axios
          .get(`/api/course_details/${courseId}`)
          .then((res) => {
            if (res.status === 200) {
              setCourse(res.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    const checkEnroll = async () => {
      list.filter((item) => {
        if (item.courseDetails._id === course?.courseDetails?._id) {
          setEnrolled(true);
        } else {
          setEnrolled(false);
        }
      });
    };
    getData();
    checkEnroll();
  }, [courseId, list, course?.courseDetails?._id]);

  return (
    <div className={classes.root}>
      <form className={classes.formWrapper}>
        <Typography variant="h5" className={classes.title}>
          Enrollment
          <br></br>
          <br></br>
        </Typography>
        <div className={classes.section}>
          <img
            src={course?.courseDetails?.banner?.url}
            className={classes.banner}
            alt="banner"
          />
          <div className={classes.section2}>
            <Typography variant="h4">{course?.courseDetails?.title}</Typography>
            <Typography variant="h6" className={classes.category}>
              {course?.courseDetails?.category}
            </Typography>
            <br></br>
            <Typography variant="h5">
              {course?.courseDetails?.price} $
            </Typography>
          </div>
        </div>

        <br></br>
        <br></br>
        <Typography variant="h6">
          {course?.courseDetails?.instructor?.name}
        </Typography>
        <Typography>{course?.courseDetails?.instructor?.mobile}</Typography>
        <Typography>{course?.courseDetails?.instructor?.address}</Typography>
        <Button
          style={{
            backgroundColor: "#EA5252",
            padding: "18px 36px",
            fontSize: "18px",
            textTransform: "none",
            marginTop: "20px",
          }}
          className={classes.button}
          variant="contained"
          onClick={() => {
            addList(course);
          }}
        >
          {enrolled ? "Enrolled" : "Enroll"}
        </Button>
      </form>
    </div>
  );
};

export default EnrollStudent;