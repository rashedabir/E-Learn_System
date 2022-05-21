import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, IconButton } from "@mui/material";
import { useStyle } from "./styles";
import Swal from "sweetalert2";
import axios from "axios";
import { GlobalState } from "../../../../GlobalState";

const Task = ({ getData, tasks }) => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { _id, title, description, start, end } = tasks;

  const deleteTask = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "to delete this task",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`https://e-learn-bd.herokuapp.com/api/task_update/${_id}`, {
            headers: { Authorization: token },
          })
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
    <div className={classes.root}>
      <div className={classes.taskWrapper}>
        <div className={classes.headingWrapper}>
          <h2 className={classes.taskhead}>
            <AssignmentIcon /> {title}
          </h2>
          <div>
            <IconButton component={Link} to={`/update_task/${_id}`}>
              <ModeEditIcon />
            </IconButton>
            <IconButton onClick={deleteTask} color="error">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.taskcontent}>
          <div>
            <div className={classes.taskcontenttxt}>{description}</div>
            <div className={classes.footer}>
              <div>
                <div className={classes.start}>Starts : {start}</div>
                <div className={classes.end}>Ends : {end}</div>
              </div>
              <Button
                sx={{ my: 1, color: "#000" }}
                variant="contained"
                color="primary"
                component={Link}
                to={`/all_submission/${_id}`}
                style={{
                  backgroundColor: "#EEE",
                  textTransform: "none",
                }}
              >
                All Submission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
