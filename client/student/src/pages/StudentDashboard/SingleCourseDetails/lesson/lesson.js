import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";

import React from "react";

import { useStyle } from "./styles";
import LessonVideo from "./../../../instrucrorDashboard/singleCourse/lessons/lessonsVideo/LessonVideo";

const StudentLesson = (props) => {
  const classes = useStyle();
  const { title, videos } = props.lessons;
  // const getData = props.getData()

  return (
    <div className={classes.lessonWrapper}>
      <div className={classes.headingWrapper}>
        <h2 className={classes.lessonhead}>
          <PlayLessonOutlinedIcon /> {title}
        </h2>
      </div>
      <div className={classes.lessoncontent}>
        {videos.map((video) => (
          <LessonVideo videos={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default StudentLesson;
