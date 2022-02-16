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
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Navbar from "../navbar/Navbar";
import rows from "../../fakeData/categories.json";
import { useStyles } from "./styles";
import { modal } from "./styles";

function BlogCatagory() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Navbar>
      <div className={classes.root} style={{ width: 950, margin: "auto" }}>
        <div className={classes.top}>
          <div>
            <h2>Blog Category</h2>
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              onClick={handleOpen}
            >
              <AddIcon className={classes.icon} />
              Add
            </Button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modal}>
            <h2 className={classes.title}>Add Blog Category</h2>
            <TextField
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
            />
            <Button variant="contained" type="submit" color="secondary">
              <SaveAltIcon className={classes.icon} /> {"save"}
            </Button>
          </Box>
        </Modal>

        <TableContainer className={classes.paper} component={Paper}>
          {
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
                        variant="contained"
                        color="default"
                        onClick={() => {}}
                      >
                        <EditIcon />
                      </IconButton>{" "}
                      <IconButton
                        variant="contained"
                        color="secondary"
                        onClick={() => {}}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          }
        </TableContainer>
      </div>
    </Navbar>
  );
}

export default BlogCatagory;
