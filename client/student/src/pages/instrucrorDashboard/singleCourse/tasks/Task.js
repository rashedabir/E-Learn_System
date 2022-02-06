import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, IconButton } from "@mui/material";
import { useStyle } from "./styles";

const Task = (props) => {
    const classes = useStyle();
    const { _id, title, description } = props.tasks;
    return (
        <div>
            <Accordion style={{ marginBottom: "6px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <div className={classes.headingWrapper}>
                        <Typography className={classes.heading}><AssignmentTurnedInIcon />{title}</Typography>
                        <div>
                            <IconButton component={Link} to={`/update_task/${_id}`}>
                                <ModeEditIcon />
                            </IconButton>

                            <IconButton
                                onClick={() => {

                                }}
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails styles={{ backgroundColor: "#EEE" }}>
                    {description}
                    <div className={classes.footer}>
                        <Typography>
                            {/* <div>Start Date : {start}</div>
                            End Date : {end} */}
                        </Typography>
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
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Task;