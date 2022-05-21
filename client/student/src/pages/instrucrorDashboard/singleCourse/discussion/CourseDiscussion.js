import DeleteIcon from "@mui/icons-material/Delete";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { GlobalState } from "../../../../GlobalState";

const CourseDiscussion = ({ discussion, getData }) => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [user] = state.userAPI.user;
  const [value, setValue] = useState(false);
  const history = useNavigate();

  const { courseId } = useParams();
  const [question, setQuestion] = useState("");

  const submitDiscussion = async () => {
    try {
      await axios.post(
        `https://e-learn-bd.herokuapp.com/api/discussion/${courseId}`,
        {
          question: question,
          user: user,
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

  const deleteDiscussion = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "to delete this lesson",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios
            .delete(
              `https://e-learn-bd.herokuapp.com/api/discussion/single/${id}`,
              {
                headers: { Authorization: token },
              }
            )
            .then(async (res) => {
              if (res.status === 200) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                await getData();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              }
            });
        }
      });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "right", mb: 4 }}>
        <Button
          onClick={() => {
            setValue(!value);
          }}
          sx={{ color: "#eb5252" }}
        >
          Ask Question
        </Button>
      </Box>
      <Collapse in={value} timeout="auto" unmountOnExit sx={{ mb: 5 }}>
        <Box sx={{ bgcolor: "#fff", p: 5, borderRadius: "6px" }}>
          <Typography variant="h6" sx={{ pb: 3 }}>
            Ask Your Question
          </Typography>
          <TextareaAutosize
            minRows={6}
            aria-label="maximum height"
            placeholder="Ask Your Question"
            style={{ width: "100%" }}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <Button
            fullWidth
            sx={{
              color: "#fff",
              bgcolor: "#eb5252",
              ":hover": {
                bgcolor: "#eb5252",
              },
            }}
            onClick={submitDiscussion}
          >
            submit
          </Button>
        </Box>
      </Collapse>

      {discussion && discussion?.length > 0 && (
        <Box>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                All Discussions
              </ListSubheader>
            }
          >
            {discussion &&
              discussion?.length > 0 &&
              discussion?.map((item) => (
                <ListItemButton key={item._id}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => {
                      history(`/course_discussion/${item?._id}`);
                    }}
                    primary={item?.question}
                    secondary={`${item?.user?.name}(${
                      item?.user?.type
                    }) • Posted ${new Date(item?.createdAt).toDateString()}`}
                  />
                  <ListItemText
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                    primary={`${item?.submissions?.length} Reply`}
                  />
                  <IconButton
                    onClick={() => {
                      deleteDiscussion(item?._id);
                    }}
                    sx={{ ml: 2 }}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemButton>
              ))}
          </List>
        </Box>
      )}
    </div>
  );
};

export default CourseDiscussion;
