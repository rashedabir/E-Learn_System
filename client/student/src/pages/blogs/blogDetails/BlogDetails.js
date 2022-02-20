import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Container } from "@mui/material";
import { useStyle } from "./styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const BlogDetails = () => {
  const classes = useStyle();
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`https://e-learn-bd.herokuapp.com/api/admin/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.blog));
  }, [blogId]);

  return (
    <div>
      <Container className={classes.root} maxWidth="xl">
        {/* */}
        <h1 className={classes.title}>{blog?.title}</h1>
        <p className={classes.cardTxt}>
          <small className={classes.titleFooter}>
            <PersonOutlineIcon /> Elearning •{" "}
            {new Date(blog?.createdAt).toDateString()}
          </small>
        </p>
        <img
          className={classes.image}
          src={blog?.images?.url}
          alt={blog?.title}
        />
        <p className="border-top mt-4 py-4">
          {blog?.description && parse(blog?.description)}
        </p>
      </Container>
    </div>
  );
};

export default BlogDetails;
