import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const ProfileLayout = ({
  children,
  handleUpload,
  loading,
  image,
  styleUpload,
  handleDestroy,
}) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <div className={classes.profileleft}>
              <div>
                <div className="user_profile_upload">
                  <input
                    type="file"
                    name="file"
                    id="user_file_up"
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
                    <div id="user_file_img" style={styleUpload}>
                      <img src={image ? image.url : ""} alt="" />
                      <span onClick={handleDestroy}>X</span>
                    </div>
                  )}
                </div>
              </div>
              <Button
                sx={{ my: 1, color: "#000" }}
                fullWidth
                variant="contained"
                color="primary"
                component={Link}
                to={`/profile`}
                style={{
                  backgroundColor: "#EEE",
                  textTransform: "none",
                }}
              >
                General Information
              </Button>
              <Button
                sx={{ my: 1, color: "#000" }}
                fullWidth
                component={Link}
                to={`/setting`}
                variant="contained"
                style={{
                  backgroundColor: "#Eee",
                  textTransform: "none",
                }}
              >
                Setting
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className={classes.profileright}>{children}</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileLayout;
