/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { GlobalState } from "../../../../GlobalState";
import { useStyle } from "./styles";

const AddTask = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [startvalue, setStartValue] = useState();
  const [endvalue, setEndValue] = useState();
  const { courseId, taskId } = useParams();
  const history = useNavigate();

  // task add
  const handleSubmit = async () => {
    const payload = {
      title: title,
      description: description,
      start: startvalue,
      end: endvalue,
    };
    if (courseId) {
      await axios
        .post(
          `https://e-learn-bd.herokuapp.com/api/task/${courseId}`,
          payload,
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Created a Task!", "success");
            history(`/course_details/${courseId}`);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    } else if (taskId) {
      await axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/task_update/${taskId}`,
          payload,
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You updated this Task!", "success");
            history(-1);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
  };

  const getSingleTask = async () => {
    setLoading(true);
    await axios
      .get(`https://e-learn-bd.herokuapp.com/api/task_update/${taskId}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.status === 200) {
          const { task } = res.data;
          setTitle(task?.title);
          setDescription(task?.description);
          setStartValue(moment(task?.start).format("YYYY-MM-DD"));
          setEndValue(moment(task?.end).format("YYYY-MM-DD"));
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    // task update
    if (taskId) {
      getSingleTask();
    }
  }, [taskId, token]);

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container maxWidth="xl">
          <div className={classes.containers}>
            <h1>{taskId ? "Update" : "Create"} Task</h1>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sx={{ marginBottom: "12px" }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Task Title"
                  variant="outlined"
                  color="warning"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <TextField
                id="outlined-multiline-static"
                label="Task Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                color="warning"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>

            <Grid container sx={{ marginTop: "1px" }} spacing={3}>
              <Grid item xs={12} sm={12} lg={6} md={6}>
                <TextField
                  type="date"
                  id="outlined-basic"
                  label="Start Date"
                  variant="outlined"
                  color="warning"
                  fullWidth
                  onChange={(e) => {
                    setStartValue(e.target.value);
                  }}
                  value={startvalue}
                />
              </Grid>

              <Grid item xs={12} sm={12} lg={6} md={6}>
                <TextField
                  type="date"
                  id="outlined-basic"
                  label="End Date"
                  variant="outlined"
                  color="warning"
                  fullWidth
                  onChange={(e) => {
                    setEndValue(e.target.value);
                  }}
                  value={endvalue}
                />
              </Grid>
            </Grid>
            <Button
              sx={{ my: 5 }}
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              style={{
                backgroundColor: "#EA5252",
                textTransform: "none",
              }}
            >
              {taskId ? "Update" : "Create"} Task
            </Button>
          </div>
        </Container>
      )}
    </div>
  );
};

export default AddTask;
