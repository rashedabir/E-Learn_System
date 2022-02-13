import Navbar from "../navbar/Navbar";
import {
  Table,
  TableBody,
  Typography,
  TableCell,
  TableRow,
  Paper,
  TableHead,
  TableContainer,
} from "@mui/material";
import React, { useContext } from "react";
import Filter from "../filter/filter";
import { GlobalState } from "../../GlobalState";
import { useStyles } from "./styles";

const CourseList = () => {
  const classes = useStyles();
  const state = useContext(GlobalState);
  const [courses] = state.courseAPI.courses;

  return (
    <div>
      <Navbar>
        <Filter />
        <div className={classes.root}>
          <div>
            <Typography variant="h4" className={classes.title}>
              Course List
            </Typography>
          </div>
          <TableContainer className={classes.paper} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Typography variant="h6">Banner</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">Course Name</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">Category</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course._id}>
                    <TableCell align="left">
                      <img
                        src={course.banner.url}
                        alt=""
                        className={classes.image}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Typography component="p">{course.title}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography component="p">{course.category}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Navbar>
    </div>
  );
};

export default CourseList;
