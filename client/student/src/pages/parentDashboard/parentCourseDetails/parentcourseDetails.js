import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ParentTask from "../task/ParentTask";
import { useStyle } from "./styles";

const ParentCourseDetails = () => {
  const classes = useStyle();

  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [objective, setObjective] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [task, setTask] = useState([]);
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
              setObjective(res.data.courseDetails.objective);
              setRequirrements(res.data.courseDetails.requirements);
              setTask(res.data.tasks);
              setLoading(false);
            }
          });
      }
    };
    getData();
  }, [courseId]);

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container className={classes.contains} maxWidth="xl">
          <Grid className={classes.contains} container spacing={2}>
            <Grid item xs={12}>
              <img
                src={course?.courseDetails?.banner.url}
                className={classes.banner}
                alt="..."
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h4">
                {course?.courseDetails?.title}
              </Typography>
              <Typography variant="h6">
                {course?.courseDetails?.category}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography
                component="p"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <GroupsOutlinedIcon className={classes.icon} /> Total enrolled :{" "}
                {course?.courseDetails?.enrolled}+
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <h2>About </h2>
              <Typography component="p">
                {course?.courseDetails?.about}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>What You’ll Learn</h2>
              <Grid className={classes.container} container spacing={3}>
                {objective &&
                  objective?.length > 0 &&
                  objective?.map((objective, i) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={6}
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography
                        component="p"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <CheckIcon className={classes.icon} />
                        {objective?.objective}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h2>Requirement</h2>
              <Grid className={classes.container} container spacing={3}>
                {requirrements &&
                  requirrements?.length > 0 &&
                  requirrements?.map((req, i) => (
                    <Grid item xs={12} md={6} lg={6} key={i}>
                      <Typography
                        component="p"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <CreateIcon className={classes.icon} />
                        {req?.requrement}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <h2>Description</h2>
              <Typography component="p">
                {course?.courseDetails?.description}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.instructor}>
              <h2>Instructor</h2>
              <Typography variant="h6">
                {course?.courseDetails?.instructor?.name}
              </Typography>
            </Grid>
          </Grid>
          <Box>
            {task &&
              task?.length > 0 &&
              task?.map((item) => <ParentTask key={item?._id} item={item} />)}
          </Box>
        </Container>
      )}
    </div>
  );
};

export default ParentCourseDetails;
