import React from "react";
import { Link } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { useStyle } from "./styles";
import { Button } from "@mui/material";

const StudentTask = (props) => {
  const classes = useStyle();
  const { _id, title, description, start, end } = props.tasks;

  return (
    <div className={classes.root}>
      <div className={classes.taskWrapper}>
        <div className={classes.headingWrapper}>
          <h2 className={classes.taskhead}>
            <AssignmentIcon /> {title}
          </h2>
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
                to={`/task_submission/${_id}`}
                style={{
                  backgroundColor: "#EEE",
                  textTransform: "none",
                }}
              >
                Submit Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTask;
