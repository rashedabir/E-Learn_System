import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Container } from "@mui/material";
import { useStyle } from "./styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import axios from "axios";

const BlogDetails = () => {
  const classes = useStyle();
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blogId) {
      const getBlogDetail = async () => {
        setLoading(true);
        await axios
          .get(`https://e-learn-bd.herokuapp.com/api/admin/blog/${blogId}`)
          .then((res) => {
            if (res.status === 200) {
              setBlog(res.data);
              setLoading(false);
            }
          });
      };
      getBlogDetail();
    }
  }, [blogId]);

  return (
    <div>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
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
      )}
    </div>
  );
};

export default BlogDetails;
