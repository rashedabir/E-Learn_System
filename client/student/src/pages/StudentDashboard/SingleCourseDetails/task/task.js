import React from "react";

import AssignmentIcon from "@mui/icons-material/Assignment";

import { useStyle } from "./styles";

const StudentTask = (props) => {
  const classes = useStyle();
  const { title, description, start, end } = props.tasks;

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
            {description}
            <div className={classes.footer}>
              <div>
                <div className={classes.start}>Starts : {start}</div>
                <div className={classes.end}>Ends : {end}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTask;
