import { Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import BlogCard from "../../../components/blogCard/BlogCard";
import { GlobalState } from "../../../GlobalState";

const Blogs = () => {
  const state = useContext(GlobalState);
  const [blogs] = state.blogAPI.blogs;
  const [loading] = state.blogAPI.loading;

  return (
    <div style={{ background: "#fff9f9", marginTop: "35px" }}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {blogs &&
              blogs?.length > 0 &&
              blogs?.map((item) => (
                <Grid key={item?._id} item md={12}>
                  <BlogCard item={item} />
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Blogs;
