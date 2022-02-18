import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
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
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalState } from "../../../GlobalState";
import { useStyle } from "./styles";
import StudentTask from "./task/task";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";

const SingleCourseDetails = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [objective, setObjective] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [task, setTask] = useState([]);
  const [list, setList] = state.userAPI.list;
  const history = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState("0");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleListItemClick = (event, index, src, name) => {
    setSelectedIndex(index);
    setLink(src);
    setTitle(name);
  };

  const fetchList = async (list) => {
    await axios.patch(
      "/api/course/enroll",
      { enrolled: list },
      {
        headers: { Authorization: token },
      }
    );
  };

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        await axios.get(`/api/course_details/${courseId}`).then((res) => {
          if (res.status === 200) {
            setCourse(res.data);
            setLessons(res.data.lessons);
            const { courseDetails } = res.data;
            setRequirrements(courseDetails?.requirements);
            setObjective(courseDetails?.objective);
            setTask(res.data.tasks);
          }
        });
      }
    };
    getData();
  }, [courseId]);

  const [value, setValue] = React.useState("lesson");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const removeCourse = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "to unenroll this course",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unenroll it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        list.forEach((item, index) => {
          if (item.courseDetails._id === courseId) {
            list.splice(index, 1);
          }
        });
        setList([...list]);
        await fetchList(list);
        Swal.fire("Unenrolled!", "You unenroll in this course.", "success");
        history("/student_dashboard");
      }
    });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.contains} maxWidth="xl">
        <div className={classes.actionBar}>
          <Button onClick={removeCourse} color="error">
            unenroll
          </Button>
        </div>
        <Grid container>
          <img
            src={course?.courseDetails?.banner.url}
            className={classes.banner}
            alt="..."
          />
        </Grid>

        <Grid className={classes.contains} container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
              {" "}
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
                      <CheckIcon className={classes.icon} />{" "}
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
                      <CreateIcon className={classes.icon} /> {req?.requrement}
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
        {/* map lesson  */}
        {task.length !== 0 ? (
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#EA5252",
                    },
                  }}
                >
                  <Tab
                    label="Lessons"
                    value="lesson"
                    style={{ minWidth: "50%" }}
                  />
                  <Tab label="Task" value="task" style={{ minWidth: "50%" }} />
                </TabList>
              </Box>
              <TabPanel value="lesson">
                {/* map lesson  */}
                {lessons.length !== 0 ? (
                  <Container maxWidth="xl">
                    <div className={classes.roots}>
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={6}>
                          <ReactPlayer url={link} width="100%" controls playing />
                          {selectedIndex === " " ? (
                            <Typography variant="h5" className={classes.title}>
                              Select a Item to begin the Playlist
                            </Typography>
                          ) : (
                            <Typography variant="h5" className={classes.title}>
                              <i className="far fa-play-circle"></i> Now Playing:{" "}
                              <strong>{title}</strong>
                            </Typography>
                          )}
                        </Grid>
                        <Grid
                          sx={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          item
                          xs={12}
                          lg={6}
                        >
                          <div className={classes.rightSide}>
                            {lessons.map((data) => (
                              // accordion here
                              <Accordion>
                                <AccordionSummary
                                  sx={{
                                    backgroundColor: "#eee",
                                  }}
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>{data.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: "0px" }}>
                                  <List
                                    aria-label="main mailbox folders"
                                    className={classes.songList}
                                  >
                                    {data.videos.map((item) => (
                                      <ListItem
                                        button
                                        selected={selectedIndex === item.title}
                                        onClick={(event) =>
                                          handleListItemClick(
                                            event,
                                            item.link,
                                            item.link,
                                            item.title
                                          )
                                        }
                                      >
                                        <ListItemIcon>
                                          {selectedIndex === item.link ? (
                                            <PauseCircleOutlineRoundedIcon
                                              className={classes.bgIcon}
                                            />
                                          ) : (
                                            <PlayCircleOutlineRoundedIcon
                                              className={classes.bgIcon}
                                            />
                                          )}
                                        </ListItemIcon>
                                        <ListItemText>{item.title}</ListItemText>
                                      </ListItem>
                                    ))}
                                  </List>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>) : (<></>)}
              </TabPanel>
              <TabPanel value="task">
                {/* all task  */}
                {task.map((task) => (
                  <StudentTask tasks={task} key={task._id} />
                ))}
              </TabPanel>
            </TabContext>
          </Box>
        ) : (
          <>
            {
              lessons.length !== 0 ? (
                <div div className={classes.lessonWrapper}>
                  <Container maxWidth="xl">
                    <div className={classes.roots}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                          <ReactPlayer url={link} width="100%" controls playing />
                          {selectedIndex === "0" ? (
                            <Typography variant="h5" className={classes.title}>
                              Select a Item to begin the Playlist
                            </Typography>
                          ) : (
                            <Typography variant="h5" className={classes.title}>
                              <i className="far fa-play-circle"></i> Now Playing:{" "}
                              <strong>{title}</strong>
                            </Typography>
                          )}
                        </Grid>
                        <Grid
                          sx={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          item
                          xs={12}
                          lg={6}
                          component={Paper}
                        >
                          <div className={classes.rightSide}>
                            {lessons.map((data) => (
                              // accordion here
                              <Accordion>
                                <AccordionSummary
                                  sx={{
                                    backgroundColor: "#eee",
                                  }}
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>{data.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: "0px" }}>
                                  <List
                                    aria-label="main mailbox folders"
                                    className={classes.songList}
                                  >
                                    {data.videos.map((item) => (
                                      <ListItem
                                        button
                                        selected={selectedIndex === item.title}
                                        onClick={(event) =>
                                          handleListItemClick(
                                            event,
                                            item.link,
                                            item.link,
                                            item.title
                                          )
                                        }
                                      >
                                        <ListItemIcon>
                                          {selectedIndex === item.link ? (
                                            <PauseCircleOutlineRoundedIcon
                                              className={classes.bgIcon}
                                            />
                                          ) : (
                                            <PlayCircleOutlineRoundedIcon
                                              className={classes.bgIcon}
                                            />
                                          )}
                                        </ListItemIcon>
                                        <ListItemText>{item.title}</ListItemText>
                                      </ListItem>
                                    ))}
                                  </List>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
                </div>)
                :
                (<></>)
            }
          </>
        )
        }
      </Container >
    </div >
  );
};

export default SingleCourseDetails;
