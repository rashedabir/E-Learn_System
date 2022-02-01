import { Button, Container, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { v4 as uuidv4 } from "uuid";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddLesson = () => {
  const [heading, setHeading] = useState("");
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { courseId } = useParams();
  const history = useNavigate();

  /*-------------------------videos-----------------------*/

  const [videos, setVideos] = useState([
    {
      id: uuidv4(),
      title: "",
      link: "",
      status: false,
    },
  ]);

  const handleChangeVideos = (id, event) => {
    const newInputFields = videos.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setVideos(newInputFields);
  };

  const handleAddVideos = (e) => {
    e.preventDefault();
    setVideos([
      ...videos,
      {
        id: uuidv4(),
        title: "",
        link: "",
        status: false,
      },
    ]);
  };

  const handleRemoveVideos = (id) => {
    const values = [...videos];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setVideos(values);
    console.log(values);
  };

  const storeLessson = async () => {
    await axios
      .post(
        `/api/lesson/${courseId}`,
        {
          title: heading,
          videos: videos,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Good job!", "You Created a Lesson!", "success");
          history(`/course_details/${courseId}`);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  };

  return (
    <div>
      <Container maxWidth="xl">
        <h1>Add Lesson</h1>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Heading"
              variant="outlined"
              color="secondary"
              value={heading}
              onChange={(e) => {
                setHeading(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        {videos.map((video, index) => (
          <Grid key={index} container spacing={3} alignItems="center">
            <Grid item xs={12} sm={12} lg={5} md={5}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ marginRight: "10px" }}>{++index}.</h1>
                <TextField
                  id="outlined-basic"
                  label="Video Name"
                  name="title"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  value={video.title}
                  onChange={(event) => handleChangeVideos(video.id, event)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={5} md={5}>
              <TextField
                id="outlined-basic"
                label="Video Link"
                name="link"
                variant="outlined"
                fullWidth
                color="secondary"
                value={video.link}
                onChange={(event) => handleChangeVideos(video.id, event)}
              />
            </Grid>
            <Grid item md={2}>
              <Button
                style={{ marginLeft: "15px" }}
                variant="contained"
                color="error"
                disabled={videos.length === 1}
                onClick={() => {
                  handleRemoveVideos(video.id);
                }}
              >
                <DeleteOutlineIcon />
              </Button>
              <Button
                style={{ marginLeft: "15px" }}
                variant="contained"
                color="secondary"
                onClick={handleAddVideos}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
        ))}
        <Button
          onClick={storeLessson}
          sx={{ my: 5 }}
          fullWidth
          variant="contained"
          color="warning"
        >
          Save
        </Button>
      </Container>
    </div>
  );
};

export default AddLesson;