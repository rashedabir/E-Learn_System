import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useStyle } from './styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const AllSubmission = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <div className={classes.body}>
                    <h2>All Submission</h2>
                </div>
                <div>
                    <Accordion style={{ marginBottom: "6px", borderRadius: "5px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <div className={classes.headingWrapper}>
                                <Typography className={classes.heading}>Student Name : </Typography>
                                <div className={classes.mark}>mark : /10 </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            Task Ans : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam nihil magnam incidunt ut consequuntur eos at labore magni autem, quos amet, nisi eius neque placeat. Eum soluta nam autem?
                            <div className={classes.footer}>
                                <TextField
                                    className={classes.txt}
                                    size="small"
                                    id="outlined-basic"
                                    label="Mark"
                                    variant="outlined"
                                    color="warning"
                                    type="number"
                                />
                                <Button
                                    style={{
                                        backgroundColor: "#EA5252",
                                        padding: "18px 36px",
                                        fontSize: "18px"
                                    }}
                                    className={classes.btn}
                                    variant="contained"
                                >Submit</Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    {/* extra for check  */}
                    <Accordion style={{ marginBottom: "6px", borderRadius: "5px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <div className={classes.headingWrapper}>
                                <Typography className={classes.heading}>Student Name : </Typography>
                                <div className={classes.mark}>mark : /10 </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            Task Ans : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam nihil magnam incidunt ut consequuntur eos at labore magni autem, quos amet, nisi eius neque placeat. Eum soluta nam autem?
                            <div className={classes.footer}>
                                <TextField
                                    className={classes.txt}
                                    size="small"
                                    id="outlined-basic"
                                    label="Mark"
                                    variant="outlined"
                                    color="warning"
                                    type="number"
                                />
                                <Button
                                    style={{
                                        backgroundColor: "#EA5252",
                                        padding: "18px 36px",
                                        fontSize: "18px"
                                    }}
                                    className={classes.btn}
                                    variant="contained"
                                >Submit</Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default AllSubmission;