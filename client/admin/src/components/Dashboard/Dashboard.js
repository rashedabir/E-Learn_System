import { Grid, Card, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";
import { useStyles } from "./styles.js";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import { icon } from "./styles.js";
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar>
        <Container>
          {" "}
          <Typography variant="h4" className={classes.heading}>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                style={{ background: "#2196f3", color: "white" }}
              >
                <PersonIcon style={icon} />
                <Typography variant="h4">150</Typography>{" "}
                <Typography variant="h6">Total Student</Typography>{" "}
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                style={{ background: "#ff9800", color: "white" }}
              >
                {" "}
                <BookIcon style={icon} />
                <Typography variant="h4">15</Typography>{" "}
                <Typography variant="h6">Total Course</Typography>{" "}
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                style={{ background: "#f44336", color: "white" }}
              >
                {" "}
                <PersonIcon style={icon} />
                <Typography variant="h4">20</Typography>{" "}
                <Typography variant="h6">Total Instructor</Typography>{" "}
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Card
                className={classes.card}
                style={{ background: "#9c27b0", color: "white" }}
              >
                {" "}
                <PersonIcon style={icon} />
                <Typography variant="h4">30</Typography>{" "}
                <Typography variant="h6">Total Parent</Typography>{" "}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Navbar>
    </div>
  );
};

export default Dashboard;