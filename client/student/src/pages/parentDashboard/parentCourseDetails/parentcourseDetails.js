import React,{useState,useContext} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Typography,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useStyle } from "./styles";
import { GlobalState } from "../../../GlobalState";
import { useNavigate, useParams } from "react-router-dom";

const ParentCourseDetails = () => {
  const classes = useStyle(); const state = useContext(GlobalState);
  const [token] = state.token;
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [objective, setObjective] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [task, setTask] = useState([]);
  const [list, setList] = state.userAPI.list;
  const history = useNavigate();
  return (
    <div className={classes.root}>
      <Container className={classes.contains} maxWidth="xl">
        <Grid container>
          <img
            // src={course?.courseDetails?.banner.url}
            src="https://picsum.photos/seed/picsum/200/300"
            src=""
            className={classes.banner}
            alt="..."
          />
        </Grid>

        <Grid className={classes.contains} container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
              {" "}
              {/* {course?.courseDetails?.title} */}title
            </Typography>
            <Typography variant="h6">
              {/* {course?.courseDetails?.category} */}category
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
              {/* {course?.courseDetails?.enrolled} */}1+
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <h2>About </h2>
            <Typography component="p">
              {/* {course?.courseDetails?.about} */}about
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>What You’ll Learn</h2>
            <Grid className={classes.container} container spacing={3}>
              {/* {objective &&
                objective?.length > 0 &&
                objective?.map((objective, i) => ( */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    // key={i}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      component="p"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CheckIcon className={classes.icon} />{" "}
                      {/* {objective?.objective} */}obj
                    </Typography>
                  </Grid>
                {/* ))} */}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <h2>Requirement</h2>
            <Grid className={classes.container} container spacing={3}>
              {/* {requirrements &&
                requirrements?.length > 0 &&
                requirrements?.map((req, i) => ( */}
                  <Grid item xs={12} md={6} lg={6} >
                    <Typography
                      component="p"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CreateIcon className={classes.icon} /> 
                      {/* {req?.requrement} */}req
                    </Typography>
                  </Grid>
                {/* ))} */}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h2>Description</h2>
            <Typography component="p">
              {/* {course?.courseDetails?.description} */}desc
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.instructor}>
            <h2>Instructor</h2>
            <Typography variant="h6">
              {/* {course?.courseDetails?.instructor?.name} */}name
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ParentCourseDetails;
