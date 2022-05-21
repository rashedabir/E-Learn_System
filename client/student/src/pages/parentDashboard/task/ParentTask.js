import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useStyle } from "./styles";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { GlobalState } from "../../../GlobalState";
import parse from "html-react-parser";

const ParentTask = ({ item }) => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [user] = state.userAPI.user;
  const [mark, setMark] = useState([]);

  useEffect(() => {
    const marks = item?.submissions.filter((list) => {
      return list?.student?.parent === user._id;
    });
    setMark(marks);
  }, [item, user._id]);

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}`}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div className={classes.taskRoot}>
      <div className={classes.taskWrapper}>
        <div className={classes.headingWrapper}>
          <h2 className={classes.taskhead}>
            <AssignmentIcon /> {item?.title}
          </h2>
          {mark[0]?.marks ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 3 }}>Progress: </Typography>
              <CircularProgressWithLabel value={mark[0]?.marks} />
            </Box>
          ) : (
            <Typography>Not Submitted</Typography>
          )}
        </div>
        <div className={classes.taskcontent}>
          <div>
            <div className={classes.taskcontenttxt}>{item?.description}</div>
            <div className={classes.footer}>
              <div>
                <div className={classes.start}>Starts : {item?.start}</div>
                <div className={classes.end}>Ends : {item?.end}</div>
              </div>
            </div>
          </div>
        </div>
        <Typography sx={{ mt: 5 }}>Submitted Answer: </Typography>
        {mark[0]?.answer && (
          <Typography>{mark[0]?.answer && parse(mark[0]?.answer)}</Typography>
        )}
      </div>
    </div>
  );
};

export default ParentTask;
