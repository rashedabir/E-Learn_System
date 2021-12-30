import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Grid,
  TextField,
  Button,
  IconButton,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(120deg, #2980b9, #8e44ad)",
    minHeight: "100vh",
    padding: "50px 120px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  table: {
    width: "100%",
    textTransform: "capitalize",
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
    margin: "15px 0",
  },

  button: {
    backgroundImage: "linear-gradient(120deg, #2980b9, #8e44ad)",
    color: "white",
  },
  icon: {
    marginRight: "10px",
    fontSize: "20px",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

function createData(name) {
  return { name };
}

const rows = [
  createData("FrontEnd Development"),
  createData("BackEnd Development"),
  createData("Full Stack Development"),
  createData("Database"),
];

function Category() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={classes.root}>
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2
                style={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Add Category
              </h2>
              <TextField
                id="outlined-basic"
                label="Category Name"
                variant="outlined"
                //value={category}
                onChange={(e) => {
                  //setCategory(e.target.value);
                }}
              />
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
              >
                <SaveAltIcon className={classes.icon} /> {"save"}
              </Button>
            </Box>
          </Modal>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} xl={8} md={8}>
            <TableContainer className={classes.paper} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <h3>Category Name</h3>
                    </TableCell>
                    <TableCell align="right">
                      <h3>Action</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell align="left">
                        <strong>{row.name}</strong>
                      </TableCell>
                      <TableCell align="right" style={{ display: "flex" }}>
                        <IconButton
                          variant="contained"
                          color="secondary"
                          onClick={() => {}}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          variant="contained"
                          color="default"
                          onClick={() => {}}
                        >
                          <EditIcon />
                        </IconButton>{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Category;
