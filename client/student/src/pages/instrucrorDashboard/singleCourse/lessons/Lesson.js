import React from "react";
import LessonVideo from "./lessonsVideo/LessonVideo";
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import { useStyle } from "./styles";

const Lesson = (props) => {
  const classes = useStyle();
  const { title, videos } = props.lessons;
  return (
    <div className={classes.lessonWrapper}>
      <h2 className={classes.lessonhead}> <PlayLessonOutlinedIcon /> {title}</h2>
      <div className={classes.lessoncontent}>
        {videos.map((video) => (
          <LessonVideo videos={video} key={video.id}></LessonVideo>
        ))}
      </div>
    </div>
  );
};

export default Lesson;
