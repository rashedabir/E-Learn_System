import { Container } from "@mui/material";
import React from "react";
import { useStyle } from "./styles";
import StudentCourses from "./StudentCourses/StudentCourses";
//import InstructionCoursesCard from './../instrucrorDashboard/instructionCoursesCard/InstructionCoursesCard';

const StudentDashboard = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <StudentCourses />
      </Container>
    </div>
  );
};

export default StudentDashboard;
