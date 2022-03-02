import StarBorder from "@mui/icons-material/StarBorder";
import {
  Button,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (discussionId) {
      const getList = async () => {
        setLoading(true);
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
              setLoading(false);
            }
          });
      };
      getList();
    }
  }, [discussionId, token]);

  const submitReply = async () => {
    try {
      setLoading(true);
      await axios.put(
        `https://e-learn-bd.herokuapp.com/api/discussion/single/${discussionId}`,
        {
          answer: reply,
          user: user,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Submitted");
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container maxWidth="xl">
          <Box className={classes.discription}>
            <ListItemText
              primary={discussion?.question}
              secondary={`${discussion?.user?.name}(${
                discussion?.user?.type
              }) • Posted ${new Date(discussion?.createdAt).toDateString()}`}
              sx={{ pb: 2 }}
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

          {discussion &&
            discussion?.submissions?.length > 0 &&
            discussion?.submissions?.map((item, i) => (
              <Box
                key={item._id}
                sx={{
                  background: "#fff",
                  margin: "20px 0",
                  borderRadius: "6px",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${item?.user?.name}(${item?.user?.type})`}
                    secondary={item?.answer}
                  />
                  <ListItemText
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                    primary={`Posted ${new Date(
                      item?.createdAt
                    ).toDateString()}`}
                  />
                </ListItemButton>
              </Box>
            ))}
        </Container>
      )}
    </div>
  );
};

export default CourseDiscussion;
