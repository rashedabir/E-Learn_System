import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../../../GlobalState";
import axios from "axios";
import Editor from "../../../../../components/editor/Editor";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SubmitTask = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [task, setTask] = useState({});
  const { taskId } = useParams();
  const [answer, setAnswer] = useState("");
  const history = useNavigate();

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
            }
          });
      };
      getTask();
    }
  }, [taskId, token]);

  const submitTask = async () => {
    try {
      await axios.put(
        `https://e-learn-bd.herokuapp.com/api/task/${taskId}`,
        {
          answer: answer,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Task Submitted");
      history(-1);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div style={{ background: "#fff9f9" }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <div
          style={{ background: "#fff", padding: "30px", borderRadius: "10px" }}
        >
          <h2>{task?.title}</h2>
          <p>{task?.description}</p>
          <Editor
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            height="200"
          />
          <Button
            sx={{
              my: 3,
              py: 1,
              background: "#eb5252",
              "& .MuiButton-root": {
                background: "#eb5252",
              },
              ":hover": {
                background: "#eb5252",
              },
            }}
            fullWidth
            variant="contained"
            onClick={submitTask}
          >
            submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SubmitTask;
