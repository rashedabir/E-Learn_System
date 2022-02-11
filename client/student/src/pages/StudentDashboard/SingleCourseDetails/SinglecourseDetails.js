import React, { } from "react";
import { useStyle } from "./styles";
import {  Container, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";


const SingleCourseDetails = () => {
  const classes = useStyle();
  // const state = useContext(GlobalState);
  // const [token] = state.token;
  // const { courseId } = useParams();
  // const [course, setCourse] = useState([]);
  // const [lessons, setLessons] = useState([]);
  // const [objective, setObjective] = useState([]);
  // const [req, setReq] = useState([]);
  // const history = useNavigate();

  // useEffect(() => {
  //   const getData = async () => {
  //     if (courseId) {
  //       await axios.get(`/api/course_details/${courseId}`).then((res) => {
  //         if (res.status === 200) {
  //           setCourse(res.data);
  //           setLessons(res.data.lessons);
  //           setObjective(res.data.courseDetails.objective);
  //           setReq(res.data.courseDetails.requirements);
  //         }
  //       });
  //     }
  //   };
  //   getData();
  // }, [courseId]);

  return (
    <div className={classes.root}>
      <Container className={classes.contains} maxWidth="xl">
        {/* <h2>Course Name : {course?.courseDetails?.title}</h2> */}

        <img
          src="https://picsum.photos/seed/picsum/900"
          className={classes.banner}
          alt="..."
        />
        <Grid className={classes.contains} container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">React </Typography>
            <Typography variant="h6" className={classes.pading}>
              tomal
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="p"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <GroupsOutlinedIcon className={classes.icon} /> Total enrolled :{" "}
              1111
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.pading}>About </h2>
            <p className={classes.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              nisi!
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>What You’ll Learn</h2>
            <Grid className={classes.container} container spacing={3}>
              {/* {objective.map((objective) => ( */}
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component="p"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <CheckIcon className={classes.icon} /> objective
                </Typography>
              </Grid>
              {/* ))} */}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <h2>Requirement</h2>
            <Grid className={classes.container} container spacing={3}>
              {/* {req.map((req) => ( */}
              <Grid item xs={12} md={6} lg={6}>
                <Typography
                  component="p"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <CreateIcon className={classes.icon} /> requrement
                </Typography>
              </Grid>
              {/* ))} */}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.pading}>Description </h2>
            <p>description</p>
          </Grid>
        </Grid>
        {/* map lesson  */}

        {/* <div className={classes.lessonWrapper}>
          {lessons.map((lesson) => (
            <StudentLesson lessons={lesson} key={lesson._id} />
          ))}
        </div> */}
      </Container>
    </div>
  );
};

export default SingleCourseDetails;
