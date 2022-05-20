import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Editor from "../../components/editor/Editor";
import Navbar from "../../components/navbar/Navbar";
import { GlobalState } from "../../GlobalState";

const AddBlogs = () => {
  const global = useContext(GlobalState);
  const [token] = global.token;
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogCategory] = global.blogCategoryAPI.blogCategory;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { blogId } = useParams();
  const history = useNavigate();

  useEffect(() => {
    if (blogId) {
      const getSingleBlog = async () => {
        await axios
          .get(`https://e-learn-bd.herokuapp.com/api/admin/blog/${blogId}`)
          .then((res) => {
            if (res.status === 200) {
              const blog = res.data;
              setTitle(blog?.title);
              setCategory(blog?.category);
              setDescription(blog?.description);
              setImage(blog?.images);
            } else {
              setTitle("");
              setDescription("");
              setCategory("");
              setImage(false);
            }
          });
      };
      getSingleBlog();
    }
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (blogId) {
        await axios.put(
          `https://e-learn-bd.herokuapp.com/api/admin/blog/${blogId}`,
          {
            title: title,
            category: category,
            images: image,
            description: description,
          },
          { headers: { Authorization: token } }
        );
        toast.warn("Post Updated");
        history(-1);
      } else {
        await axios.post(
          "https://e-learn-bd.herokuapp.com/api/admin/blog",
          {
            title: title,
            category: category,
            images: image,
            description: description,
          },
          { headers: { Authorization: token } }
        );
        toast.success("Blog Posted");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
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

  return (
    <Navbar>
      <Container maxWidth="xl" sx={{ py: 7 }}>
        <Grid container spacing={3}>
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
          <Grid item md={6} sm={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {blogCategory &&
                  blogCategory.map((item, i) => (
                    <MenuItem key={i} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <Editor
              contents={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button
          sx={{ mt: 4, py: 1 }}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
        >
          {blogId ? "update" : "save"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default AddBlogs;
