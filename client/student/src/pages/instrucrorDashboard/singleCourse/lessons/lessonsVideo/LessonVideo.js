import React from "react";
import ReactPlayer from "react-player";
import { useStyle } from "./styles";

const LessonVideo = (props) => {
  const { title, link } = props.videos;
  // const { title } = props.videos;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span>Class : {title}</span>
      </div>
      <ReactPlayer url={link} />
    </div>
  );
};

export default LessonVideo;
