import React from 'react';
import { Link } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, IconButton } from "@mui/material";
import { useStyle } from "./styles";

const Task = (props) => {
    const classes = useStyle();
    const { _id, title, description, start, end } = props.tasks;
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
                        <IconButton
                            color="error"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.taskcontent}>
                    <div>
                        {description}
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