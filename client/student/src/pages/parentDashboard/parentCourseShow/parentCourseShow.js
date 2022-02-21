import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../../components/Cards/Card";
import { GlobalState } from "../../../GlobalState";
import { useStyle } from "./styles";

const ParentCourseShow = ({ course }) => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { studentId } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (studentId) {
      const getCourses = async () => {
        setLoading(true);
        axios
          .get(
            `https://e-learn-bd.herokuapp.com/api/parent/child/${studentId}`,
            {
              headers: { Authorization: token },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              const { enrolled } = res?.data;
              setCourses(enrolled);
              setLoading(false);
            }
          });
      };
      getCourses();
    }
  }, [studentId, token]);

  return (
    <div style={{ background: "#fff5f6" }}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container maxWidth="xl" className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            Enrolled Courses
          </Typography>

          <Grid container spacing={4}>
            {courses &&
              courses?.length > 0 &&
              courses?.map((item, i) => (
                <Grid key={i} item md={3} sm={12} xs={12}>
                  <Cards
                    item={item?.courseDetails}
                    type="parent_course_details"
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default ParentCourseShow;
