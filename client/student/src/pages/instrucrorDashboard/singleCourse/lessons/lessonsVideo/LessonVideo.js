import React from "react";
import ReactPlayer from "react-player";
import { useStyle } from "./styles";

const LessonVideo = (props) => {
  const { title, link } = props.videos;
  const classes = useStyle();
  return (
    <div>
      <div className={classes.title}>
        <span>Tittle : {title}</span>
      </div>
      <div className={classes.video}>
        <ReactPlayer url={link} />
      </div>
      {/* <ReactPlayer url={link} /> */}
    </div>
  );
};

export default LessonVideo;
