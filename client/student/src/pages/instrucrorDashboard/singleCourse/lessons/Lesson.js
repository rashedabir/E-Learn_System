import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";
import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalState } from "../../../../GlobalState";
import LessonVideo from "./lessonsVideo/LessonVideo";
import { useStyle } from "./styles";

const Lesson = ({ lessons, getData }) => {
  const classes = useStyle();
  const { title, videos, _id } = lessons;
  const state = useContext(GlobalState);
  const [token] = state.token;

  const handleDeleteLesson = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "to delete this lesson",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(
            `https://e-learn-bd.herokuapp.com/api/lesson_details/${_id}`,
            {
              headers: { Authorization: token },
            }
          )
          .then(async (res) => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              await getData();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };

  return (
    <div className={classes.lessonWrapper}>
      <div className={classes.headingWrapper}>
        <h2 className={classes.lessonhead}>
          <PlayLessonOutlinedIcon /> {title}
        </h2>
        <div>
          <IconButton component={Link} to={`/update_lesson/${_id}`}>
            <ModeEditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDeleteLesson();
            }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.lessoncontent}>
        {videos.map((video) => (
          <LessonVideo videos={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default Lesson;
