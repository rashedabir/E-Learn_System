import {
  Card,
  Container,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styles.js";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ParentDashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.heading}>
         Parent Dashboard
        </Typography>
        <Link to="/parent_course">
          <Card
            className={classes.card}
            style={{ background: "#2196f3", color: "white" }} 
          >
            <CardActionArea>
              <CardContent>
                <p>
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], width: 50, height: 50 }}
                  >
                    T
                  </Avatar>
                </p>
                <p>
                  <Typography variant="h4">Tomal</Typography>
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Container>
    </div>
  );
};

export default ParentDashboard;
