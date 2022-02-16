import { Button, Container, Grid, Grow } from "@mui/material";
import React, { useContext } from "react";
import Filter from "../../components/filter/Filter";
import { GlobalState } from "../../GlobalState";
import Cards from "../../components/Cards/Card";
import CourseCard from "../../components/skeleton/CourseCard";
import { useStyle } from "./styles";

const AllCourse = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [courses] = state.courseAPI.courses;
  const [loading] = state.courseAPI.loading;
  const [page, setPage] = state.courseAPI.page;
  const [result] = state.courseAPI.result;

  return (
    <div style={{ background: "#fff9f9", marginTop: "35px" }}>
      <Container maxWidth="xl">
        <Filter className={classes.search} />
        <Grow in>
          <Grid container spacing={3} alignContent="stretch">
            {courses.map((course, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Cards item={course} type="details" />
              </Grid>
            ))}
          </Grid>
        </Grow>
        {courses.length === 0 && <CourseCard loading={loading} />}
        <div className="load_more">
          {result < page * 8 ? (
            ""
          ) : (
            <Button color="error" onClick={() => setPage(page + 1)}>
              Load more
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllCourse;
