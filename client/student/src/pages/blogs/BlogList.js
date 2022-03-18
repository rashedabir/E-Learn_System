import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../../GlobalState";

const Blogs = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      await axios
        .get("https://e-learn-bd.herokuapp.com/api/instructor/blog", {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            setBlogs(res.data);
          }
        });
    };
    getBlogs();
  }, [token]);

  const deleteBlog = async (id) => {
    if (window.confirm("want to delete")) {
      await axios
        .delete(`https://e-learn-bd.herokuapp.com/api/instructor/blog/${id}`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Deleted");
          }
        });
    }
  };

  return (
    <Container maxWidth="xl">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Blogs</h2>
        <Button component={Link} to="/create_blog">
          Add Blog
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableHead>
          {blogs &&
            blogs?.length > 0 &&
            blogs?.map((item, i) => (
              <TableBody key={i}>
                <TableCell>{++i}</TableCell>
                <TableCell>{item?.title}</TableCell>
                <TableCell>
                  {new Date(item?.createdAt).toDateString()}
                </TableCell>
                <TableCell>
                  <IconButton component={Link} to={`/edit_blogs/${item?._id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      deleteBlog(item?._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Blogs;
