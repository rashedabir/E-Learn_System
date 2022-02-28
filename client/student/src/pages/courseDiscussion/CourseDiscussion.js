import { Container } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">CourseDiscussion</Container>
    </div>
  );
};

export default CourseDiscussion;
