import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState.js";
import { useStyles } from "./styles.js";

const ParentDashboard = () => {
  const classes = useStyles();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [child, setChild] = useState([]);

  useEffect(() => {
    const getChild = async () => {
      await axios
        .get("https://e-learn-bd.herokuapp.com/api/parent/child/", {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            setChild(res.data);
          }
        });
    };
    getChild();
  }, [token]);

  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h4" className={classes.heading}>
          Parent Dashboard
        </Typography>
        <Grid container spacing={4}>
          {child &&
            child?.length > 0 &&
            child?.map((item, i) => (
              <Grid item md={3} sm={12} xs={12}>
                <Box key={item?._id}>
                  <Card
                    className={classes.card}
                    style={{ background: "#2196f3", color: "white" }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Avatar src="/broken-image.jpg" sx={{ mb: 5 }} />
                        <Typography
                          sx={{ textTransform: "capitalize", color: "#fff" }}
                          variant="h5"
                          component={Link}
                          to={`/child_course/${item?._id}`}
                        >
                          {item?.name}
                        </Typography>
                        <Typography>
                          Joined: {new Date(item?.createdAt).toDateString()}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ParentDashboard;
