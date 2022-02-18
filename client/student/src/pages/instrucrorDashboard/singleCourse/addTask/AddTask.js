import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
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
  const [description, setDescription] = useState("");
  const [startvalue, setStartValue] = useState(new Date().toLocaleDateString());
  const [endvalue, setEndValue] = useState(new Date().toLocaleDateString());
  const { courseId, taskId } = useParams();
  const history = useNavigate();

  // task add
  const handleSubmit = async () => {
    const payload = {
      title: title,
      description: description,
      start: new Date(startvalue).toLocaleDateString(),
      end: new Date(endvalue).toLocaleDateString(),
    };
    if (courseId) {
      await axios
        .post(`/api/task/${courseId}`, payload, {
          headers: { Authorization: token },
        })
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
        .put(`/api/task_update/${taskId}`, payload, {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You updated this Task!", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
  };

  useEffect(() => {
    // task update
    if (taskId) {
      const getSingleTask = async () => {
        await axios
          .get(`/api/task_update/${taskId}`, {
            headers: { Authorization: token },
          })
          .then((res) => {
            if (res.status === 200) {
              const { task } = res.data;
              setTitle(task?.title);
              setDescription(task?.description);
              setStartValue(task?.start);
              setEndValue(task?.end);
            }
          });
      };
      getSingleTask();
    }
  }, [taskId, token]);

  return (
    <div className={classes.root}>
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  renderInput={(props) => (
                    <TextField fullWidth color="warning" {...props} />
                  )}
                  label="Start Date"
                  value={startvalue}
                  minDate={new Date()}
                  onChange={(newStartValue) => {
                    setStartValue(newStartValue);
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={12} lg={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  renderInput={(props) => (
                    <TextField fullWidth color="warning" {...props} />
                  )}
                  label="End Date"
                  minDate={new Date()}
                  value={endvalue}
                  onChange={(newEndValue) => {
                    setEndValue(newEndValue);
                  }}
                />
              </LocalizationProvider>
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
    </div>
  );
};

export default AddTask;
