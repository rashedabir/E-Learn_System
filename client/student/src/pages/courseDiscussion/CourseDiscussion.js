import { Button, Container, ListItemText, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../../GlobalState";
import { useStyle } from "./styles";

const CourseDiscussion = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [user] = state.userAPI.user;
  const [discussion, setDiscussion] = useState({});
  const [reply, setReply] = useState("");
  const { discussionId } = useParams();

  console.log(discussion);

  useEffect(() => {
    if (discussionId) {
      const getList = async () => {
        await axios
          .get(
            `https://e-learn-bd.herokuapp.com/api/discussion/single/${discussionId}`,
            {
              headers: { Authorization: token },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              const { discussion } = res.data;
              setDiscussion(discussion);
            }
          });
      };
      getList();
    }
  }, [discussionId, token]);

  const submitReply = async () => {
    try {
      await axios.post(
        `https://e-learn-bd.herokuapp.com/api/discussion/single/${discussionId}`,
        {
          answer: reply,
          type: user.type,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Submitted");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Box className={classes.discription}>
          <ListItemText
            primary={`Qestion : ${discussion?.question}`}
            secondary={`Posted ${new Date(
              discussion?.createdAt
            ).toDateString()}`}
          />
          <TextField
            id="outlined-multiline-static"
            label="Answer Question"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            color="warning"
            className={classes.answerField}
            onChange={(e) => {
              setReply(e.target.value);
            }}
          />
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#EA5252",
              textTransform: "none",
            }}
            sx={{ mt: 5 }}
            onClick={submitReply}
          >
            Submit
          </Button>
        </Box>
      </Container>

    </div>
  );
};

export default CourseDiscussion;
