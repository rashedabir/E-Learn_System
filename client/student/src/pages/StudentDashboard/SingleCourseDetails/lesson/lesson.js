import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";
import React from "react";
import { useStyle } from "./styles";
import LessonVideo from "./../../../instrucrorDashboard/singleCourse/lessons/lessonsVideo/LessonVideo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StudentLesson = (props) => {
  const classes = useStyle();
  const { title, videos } = props.lessons;
  // const getData = props.getData()

  return (
    <div className={classes.lessonWrapper}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div className={classes.headingWrapper}>
              <h2 className={classes.lessonHead}>
                <PlayLessonOutlinedIcon /> {title}
              </h2>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={classes.lessoncontent}>
              {videos.map((video) => (
                <LessonVideo videos={video} key={video.id} />
              ))}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StudentLesson;
