import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  Button,
  IconButton,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Navbar from "../navbar/Navbar";
import { useStyles } from "./styles";
import { modal } from "./styles";
import { GlobalState } from "../../GlobalState";

function Category() {
  const classes = useStyles();

  const state = useContext(GlobalState);
  const [token] = state.token;
  const [rows] = state.courseCategoryAPI.courseCategory;
  const [callback, setCallback] = state.courseCategoryAPI.callback;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOnEdit(false);
    setName("");
  };

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [onEdit, setOnEdit] = useState(false);

  const editCategory = (id, name) => {
    handleOpen();
    setId(id);
    setName(name);
    setOnEdit(true);
  };

  const deleteCategory = async (id, name) => {
    if (window.confirm(`Want to delete ${name} Category`)) {
      await axios.delete(`https://e-learn-bd.herokuapp.com/api/admin/course_cetegory/${id}`, {
        headers: { Authorization: token },
      });
      setCallback(!callback);
      toast.error("Category Deleted");
    }
  };

  const handleSubmit = async () => {
    if (onEdit) {
      try {
        await axios.put(
          `https://e-learn-bd.herokuapp.com/api/admin/course_cetegory/${id}`,
          {
            name: name,
          },
          {
            headers: { Authorization: token },
          }
        );
        setName("");
        setCallback(!callback);
        handleClose();
        toast.warn("Category Updated");
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    } else {
      try {
        await axios.post(
          "https://e-learn-bd.herokuapp.com/api/admin/course_cetegory/",
          {
            name: name,
          },
          {
            headers: { Authorization: token },
          }
        );
        setName("");
        setCallback(!callback);
        handleClose();
        toast.success("Category Added");
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <Navbar>
        <div className={classes.root} style={{ width: 950, margin: "auto" }}>
          <div className={classes.top}>
            <div>
              <h2>Course Category</h2>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                size="large"
                onClick={handleOpen}
              >
                <AddIcon className={classes.icon} />
                Add
              </Button>
            </div>
          </div>
          <div>
            <TableContainer className={classes.paper} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <Typography variant="h6">Name</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6">Action</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        <Typography>{row.name}</Typography>
                      </TableCell>
                      <TableCell align="right" className={classes.iconButton}>
                        <IconButton
                          onClick={() => {
                            editCategory(row._id, row.name);
                          }}
                          variant="contained"
                          color="default"
                        >
                          <EditIcon />
                        </IconButton>{" "}
                        <IconButton
                          onClick={() => {
                            deleteCategory(row._id, row.name);
                          }}
                          variant="contained"
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal}>
            <h2 className={classes.title}>
              {onEdit ? "Update Course Category" : "Add Course Category"}
            </h2>
            <TextField
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              color="secondary"
              onClick={handleSubmit}
            >
              <SaveAltIcon className={classes.icon} />{" "}
              {onEdit ? "Update" : "save"}
            </Button>
          </Box>
        </Modal>
      </Navbar>
    </>
  );
}

export default Category;
