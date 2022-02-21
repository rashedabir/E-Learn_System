import { Button, Divider, Typography } from "@mui/material";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        setLoading(true);
        await axios
          .get(
            `https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`
          )
          .then((res) => {
            if (res.status === 200) {
              setCourse(res.data);
              setLoading(false);
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
          return setEnrolled(true);
        } else {
          return setEnrolled(false);
        }
      });
    };
    getData();
    checkEnroll();
  }, [courseId, list, course?.courseDetails?._id]);

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <form className={classes.formWrapper}>
          <Typography variant="h4">Checkout</Typography>
          <br></br>
          <Divider />
          <br></br>
          <div className={classes.section}>
            <img
              src={course?.courseDetails?.banner?.url}
              className={classes.banner}
              alt="banner"
            />
            <div className={classes.section2}>
              <Typography variant="h6" className={classes.title}>
                {course?.courseDetails?.title}
              </Typography>
              <Typography variant="subtitle2" className={classes.category}>
                {course?.courseDetails?.category}
              </Typography>

              <Typography variant="h6" className={classes.price}>
                ${course?.courseDetails?.price}
              </Typography>
            </div>
          </div>

          <Typography variant="subtitle2" className={classes.heading}>
            Instructor Info
          </Typography>

          <Typography variant="h6" className={classes.title}>
            {course?.courseDetails?.instructor?.name}
          </Typography>

          <Typography>{course?.courseDetails?.instructor?.address}</Typography>
          <Typography>{course?.courseDetails?.instructor?.mobile}</Typography>

          <Button
            style={{
              backgroundColor: "#EA5252",
              padding: "18px 25px",
              fontSize: "17px",
              textTransform: "none",
              marginTop: "25px",
            }}
            className={classes.button}
            variant="contained"
            onClick={() => {
              addList(course);
            }}
          >
            {enrolled ? "Enrolled" : "Confirm Enroll"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default EnrollStudent;
