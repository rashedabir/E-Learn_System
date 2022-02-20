import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GlobalState } from "../../GlobalState";
import { v4 as uuidv4 } from "uuid";
import { useStyle } from "./styles";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate, useParams } from "react-router-dom";

const CreateCourse = () => {
  const classes = useStyle();
  const history = useNavigate();
  const { courseId } = useParams();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [categories] = state.courseCategoryAPI.category;
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("");

  /*-----------------objective-------------------*/

  const [objectives, setObjectives] = useState([
    {
      id: uuidv4(),
      objective: "",
    },
  ]);

  const handleChangeObjective = (id, event) => {
    const newInputFields = objectives.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setObjectives(newInputFields);
  };

  const handleAddObjective = () => {
    setObjectives([...objectives, { id: uuidv4(), objective: "" }]);
  };

  const handleRemoveObjective = (id) => {
    const values = [...objectives];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setObjectives(values);
  };

  /*----------------requirement-------------*/

  const [requirements, setRequirements] = useState([
    {
      id: uuidv4(),
      requrement: "",
    },
  ]);

  const handleChangeRequirement = (id, event) => {
    const newInputFields = requirements.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setRequirements(newInputFields);
  };

  const handleAddRequirement = () => {
    setRequirements([...requirements, { id: uuidv4(), requrement: "" }]);
  };

  const handleRemoveRequirements = (id) => {
    const values = [...requirements];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setRequirements(values);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post(
        "https://e-learn-bd.herokuapp.com/api/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      setLoading(false);
      setImage(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "https://e-learn-bd.herokuapp.com/api/destroy",
        { public_id: image.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImage(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: image ? "block" : "none",
  };

  const handleSubmit = async () => {
    if (courseId) {
      await axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`,
          {
            title: title,
            price: price,
            description: description,
            about: about,
            objective: objectives,
            requirements: requirements,
            banner: image,
            category: category,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Updated this Course!", "success");
            history(`/course_details/${courseId}`);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    } else {
      await axios
        .post(
          "https://e-learn-bd.herokuapp.com/api/course",
          {
            title: title,
            price: price,
            description: description,
            about: about,
            banner: image,
            category: category,
            objective: objectives,
            requirements: requirements,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Created a Course!", "success");
            history("/instructor_dashboard");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
  };

  useEffect(() => {
    if (courseId) {
      // get course details
      const getCourseDetails = async () => {
        if (courseId) {
          await axios
            .get(
              `https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`
            )
            .then((res) => {
              if (res.status === 200) {
                const { courseDetails } = res.data;
                setImage(courseDetails?.banner);
                setTitle(courseDetails?.title);
                setPrice(courseDetails?.price);
                setCategory(courseDetails?.category);
                setDescription(courseDetails?.description);
                setAbout(courseDetails?.about);
                setObjectives(courseDetails?.objective);
                setRequirements(courseDetails?.requirements);
              }
            });
        } else {
          setImage(false);
          setTitle("");
          setPrice(0);
          setCategory("");
          setDescription("");
          setAbout("");
          setObjectives([
            {
              id: uuidv4(),
              objective: "",
            },
          ]);
          setRequirements([
            {
              id: uuidv4(),
              requrement: "",
            },
          ]);
        }
      };
      getCourseDetails();
    }
  }, [courseId]);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.wrapper}>
          <h2>{courseId ? "Update" : "Create"} Course</h2>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <div className="upload">
                <input
                  type="file"
                  name="file"
                  id="file_up"
                  onChange={handleUpload}
                />
                {loading ? (
                  // <LoadingScreen
                  //   loading={loading}
                  //   bgColor="#f1f1f1"
                  //   spinnerColor="#9ee5f8"
                  //   textColor="#676767"
                  //   logoSrc="/logo.png"
                  // />
                  "loading"
                ) : (
                  <div id="file_img" style={styleUpload}>
                    <img src={image ? image.url : ""} alt="" />
                    <span onClick={handleDestroy}>X</span>
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Course Title"
                variant="outlined"
                color="warning"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Price"
                type="number"
                variant="outlined"
                color="warning"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                value={price}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="warning">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  color="warning"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value={category}
                >
                  {categories.map((item, i) => (
                    <MenuItem key={i} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <TextField
                id="outlined-multiline-static"
                label="Course Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                color="warning"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <TextField
                id="outlined-multiline-static"
                label="Course About"
                multiline
                rows={4}
                color="warning"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                value={about}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              {objectives.map((objective, index) => (
                <div
                  key={objective.id}
                  className={classes.fullWidth}
                  style={{ display: "flex" }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Objective"
                    name="objective"
                    variant="outlined"
                    color="warning"
                    style={{ width: "100%" }}
                    value={objective.objective}
                    onChange={(event) =>
                      handleChangeObjective(objective.id, event)
                    }
                  />
                  <IconButton
                    style={{ marginLeft: "15px" }}
                    variant="contained"
                    color="error"
                    disabled={objectives.length === 1}
                    onClick={() => handleRemoveObjective(objective.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </div>
              ))}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#EA5252",
                }}
                onClick={handleAddObjective}
              >
                <AddIcon />
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              {requirements.map((requirement, index) => (
                <div
                  key={requirement.id}
                  className={classes.fullWidth}
                  style={{ display: "flex" }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Requirement"
                    name="requrement"
                    variant="outlined"
                    color="warning"
                    style={{ width: "100%" }}
                    value={requirement.requrement}
                    onChange={(event) =>
                      handleChangeRequirement(requirement.id, event)
                    }
                  />
                  <IconButton
                    style={{ marginLeft: "15px" }}
                    variant="contained"
                    color="error"
                    disabled={requirements.length === 1}
                    onClick={() => handleRemoveRequirements(requirement.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </div>
              ))}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#EA5252",
                }}
                onClick={handleAddRequirement}
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#EA5252",
              textTransform: "none",
            }}
            sx={{ mt: 5 }}
          >
            <SaveIcon /> {courseId ? "Update" : " Save"}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CreateCourse;
