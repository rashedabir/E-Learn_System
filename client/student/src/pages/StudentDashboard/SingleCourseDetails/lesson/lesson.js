import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";
import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalState } from "../../../../GlobalState";
import { useStyle } from "./styles";
import LessonVideo from "./../../../instrucrorDashboard/singleCourse/lessons/lessonsVideo/LessonVideo";

const StudentLesson = (props) => {
  const classes = useStyle();
  const { title, videos, _id } = props.lessons;
  // const getData = props.getData()
  const state = useContext(GlobalState);
  const [token] = state.token;

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
