import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useStyle } from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GlobalState } from "../../../../../GlobalState";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import { toast } from "react-toastify";

const AllSubmission = () => {
  const classes = useStyle();

  const state = useContext(GlobalState);
  const [token] = state.token;
  const [task, setTask] = useState({});
  const [mark, setMark] = useState();
  const { taskId } = useParams();
  const [submissions, setSubmissions] = useState([]);

  const getTask = async () => {
    await axios
      .get(`https://e-learn-bd.herokuapp.com/api/task_update/${taskId}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.status === 200) {
          setTask(res.data.task);
          setSubmissions(res?.data?.task?.submissions);
        }
      });
  };

  const handleMarking = async (id) => {
    try {
      await axios.put(
        `https://e-learn-bd.herokuapp.com/api/mark_upload/${id}`,
        {
          marks: mark,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Uploaded");
      await getTask();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    if (taskId) {
      const getTask = async () => {
        await axios
          .get(`https://e-learn-bd.herokuapp.com/api/task_update/${taskId}`, {
            headers: { Authorization: token },
          })
          .then((res) => {
            if (res.status === 200) {
              setTask(res.data.task);
              setSubmissions(res?.data?.task?.submissions);
            }
          });
      };
      getTask();
    }
  }, [taskId, token]);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.body}>
          <h1>{task?.title}</h1>
          <p>{task?.description}</p>
          <h2>All Submission</h2>
        </div>
        <div>
          {submissions &&
            submissions.length > 0 &&
            submissions?.map((item, i) => (
              <Accordion
                key={i}
                style={{ marginBottom: "6px", borderRadius: "5px" }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className={classes.headingWrapper}>
                    <Typography className={classes.heading}>
                      Student Name : {item?.student?.name}
                    </Typography>
                    <div className={classes.mark}>Mark : {item?.marks} </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Answer:<p>{item?.answer && parse(item?.answer)}</p>
                  <div className={classes.footer}>
                    <TextField
                      className={classes.txt}
                      size="small"
                      id="outlined-basic"
                      label="Mark"
                      variant="outlined"
                      color="warning"
                      type="number"
                      onChange={(e) => {
                        setMark(e.target.value);
                      }}
                    />
                    <Button
                      style={{
                        backgroundColor: "#EA5252",
                        padding: "18px 36px",
                        fontSize: "18px",
                      }}
                      className={classes.btn}
                      variant="contained"
                      onClick={() => {
                        handleMarking(item._id);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default AllSubmission;
