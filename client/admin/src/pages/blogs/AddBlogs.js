import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/navbar/Navbar";
import { GlobalState } from "../../GlobalState";

const AddBlogs = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
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
        "/api/destroy",
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
      <Container maxWidth="xl">
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
        </Grid>
      </Container>
    </Navbar>
  );
};

export default AddBlogs;
